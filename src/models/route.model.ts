import type { Icon } from "@phosphor-icons/react";

export type RoutePath = "home" | "students" | "disciplines" | "users";

export interface Route {
  pathname: RoutePath;
  icon: Icon;
  label: string;
}
