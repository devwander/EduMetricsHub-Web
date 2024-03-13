import { CircularProgress, Stack } from "@mui/material";
import { isAxiosError } from "axios";
import type { ReactElement } from "react";
import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { Dashboard } from "@/layout";
import { Color, api } from "@/lib";
import { Signin } from "@/pages";
import { authStore } from "@/store";

import { Private } from "./private";
import { Public } from "./public";

const HomeRouter = lazy(() =>
  import("@/pages/dashboard/home/router").then((module) => ({
    default: module.Router,
  }))
);

const StudentRouter = lazy(() =>
  import("@/pages/dashboard/student/router").then((module) => ({
    default: module.Router,
  }))
);

const DisciplineRouter = lazy(() =>
  import("@/pages/dashboard/discipline/router").then((module) => ({
    default: module.Router,
  }))
);

const UserRouter = lazy(() =>
  import("@/pages/dashboard/user/router").then((module) => ({
    default: module.Router,
  }))
);

export function Router(): ReactElement {
  const navigate = useNavigate();
  const { logged } = authStore.getState().load();

  useEffect(() => {
    if (!logged) {
      navigate("/sign-in", { replace: true });
    }
  }, [logged, navigate]);

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          const message = error.response?.data?.message;

          if (status === 401 && message === "Unauthorized.") {
            sessionStorage.clear();
            navigate("/sign-in", { replace: true });
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptorId);
    };
  }, [navigate]);

  return (
    <Suspense
      fallback={
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress sx={{ color: Color.GREEN_01 }} size={100} />
        </Stack>
      }
    >
      <Routes>
        {!logged && (
          <Route element={<Public />}>
            <Route index element={<Navigate to="/sign-in" />} />
            <Route path="sign-in" element={<Signin />} />
          </Route>
        )}

        {logged && (
          <Route element={<Private />}>
            <Route element={<Dashboard />}>
              <Route path="home/*" element={<HomeRouter />} />
              <Route path="students/*" element={<StudentRouter />} />
              <Route path="disciplines/*" element={<DisciplineRouter />} />
              <Route path="users/*" element={<UserRouter />} />
            </Route>
          </Route>
        )}
      </Routes>
    </Suspense>
  );
}
