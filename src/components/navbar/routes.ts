import { Cardholder, House, UsersThree } from "@phosphor-icons/react";

import type { Route } from "@/models";

export const Routes: Route[] = [
  {
    icon: House,
    pathname: "home",
    label: "Home",
  },
  {
    icon: UsersThree,
    pathname: "students",
    label: "Estudantes",
  },
  {
    icon: Cardholder,
    pathname: "disciplines",
    label: "Disciplinas",
  },
];
