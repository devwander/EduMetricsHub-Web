import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context";
import { tanstack } from "./lib";
import { Router } from "./routes";

// const LOCALE_TEXT =
//   ptBR.components.MuiLocalizationProvider.defaultProps.localeText;

export function App(): ReactElement {
  return (
    // <LocalizationProvider
    //   dateAdapter={AdapterLuxon}
    //   localeText={LOCALE_TEXT}
    //   adapterLocale="pt-br"
    // >
    <ThemeProvider>
      <QueryClientProvider client={tanstack}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
      <ToastContainer theme="colored" />
      <CssBaseline />
    </ThemeProvider>
    // </LocalizationProvider>
  );
}
