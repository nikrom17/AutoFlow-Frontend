// master list of roles used in this app
type Roles = "admin" | "basicUser" | "paidUser";

interface Routes {
  allIds: String[];
  byId: {
    [key: string]: {
      requiredRoles: Roles[];
    };
  };
}

export const routeConstants: string[] = ["error", "home"];

export const routes: Routes = {
  allIds: ["error", "home"],
  byId: {
    home: { requiredRoles: [] },
    error: { requiredRoles: [] },
  },
};
