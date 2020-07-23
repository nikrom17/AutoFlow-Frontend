import { TOGGLE_NAVIGATION_COLLAPSED } from "src/redux/types/navigationTypes";

export const toggleNavigationCollapsed = (collapsed: boolean) => ({
  type: TOGGLE_NAVIGATION_COLLAPSED,
});
