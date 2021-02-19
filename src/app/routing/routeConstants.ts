import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TodosPage from '@pages/todosPage/todosPage';
import ErrorPage from '@pages/errorPage/errorPage';
import HomePage from '@pages/homePage/homePage';
import OpportunitiesPage from '@pages/opportunitieslPage/opporrtunitiesPage';
import LeadsPage from '@pages/leadsPage/leadsPage';

// master list of roles used in this app
type Roles = 'admin' | 'basicUser' | 'paidUser';

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

export const routeConstants: string[] = [
  'error',
  'funnel',
  'home',
  'leads',
  'todos',
];

export const routes: Routes = {
  allIds: routeConstants,
  byId: {
    error: { requiredRoles: [], Component: ErrorPage, path: '/error' },
    funnel: {
      requiredRoles: [],
      Component: OpportunitiesPage,
      path: '/opportunities',
    },
    home: { requiredRoles: [], Component: HomePage, path: '/' },
    leads: {
      requiredRoles: [],
      Component: LeadsPage,
      path: '/leads',
    },
    todos: {
      requiredRoles: [],
      Component: TodosPage,
      path: '/todos',
    },
  },
};
