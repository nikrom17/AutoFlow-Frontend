import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import AboutPage from "@pages/aboutPage/aboutPage";
import ErrorPage from "@pages/errorPage/errorPage";
import HomePage from "@pages/homePage/homePage";

// master list of roles used in this app
type Roles = "admin" | "basicUser" | "paidUser";

interface Routes {
  allIds: string[];
  byId: {
    [key: string]: {
      Component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
      path: string;
      requiredRoles: Roles[];
    };
  };
}

export const routeConstants: string[] = ["error", "home", "about"];

export const routes: Routes = {
  allIds: ["about", "error", "home"],
  byId: {
    about: { requiredRoles: [], Component: AboutPage, path: "/about" },
    error: { requiredRoles: [], Component: ErrorPage, path: "/error" },
    home: { requiredRoles: [], Component: HomePage, path: "/home" },
  },
};
