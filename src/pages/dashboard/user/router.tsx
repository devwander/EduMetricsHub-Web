import type { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { User } from ".";

export function Router(): ReactElement {
  return (
    <Routes>
      <Route index element={<User />} />
    </Routes>
  );
}
