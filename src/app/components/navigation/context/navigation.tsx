import * as React from "react";

export const navigationContext = {
  collapsed: true,
};
// const [navigationContext, setNavigationContext] = React.useState(navigation);
const setNavigationContext: React.Dispatch<React.SetStateAction<{
  collapsed: boolean;
}>> = () => {};

export const NavContext = React.createContext({
  navigationContext,
  setNavigationContext,
});
