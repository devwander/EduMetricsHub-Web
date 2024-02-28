import type { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { Discipline } from ".";

export function Router(): ReactElement {
  return (
    <Routes>
      <Route index element={<Discipline />} />
    </Routes>
  );
}
