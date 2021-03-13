import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TodosPage from '@pages/todosPage/todosPage';
import ErrorPage from '@pages/errorPage/errorPage';
import HomePage from '@pages/homePage/homePage';
import OpportunitiesPage from '@pages/opportunitieslPage/opporrtunitiesPage';
import LeadsPage from '@pages/leadsPage/leadsPage';
import NotFoundPage from '@pages/notFoundPage/notFoundPage';

// master list of roles used in this app
type Roles = 'admin' | 'basicUser' | 'paidUser';

interface Routes {
  allIds: string[];
  byId: {
    [key: string]: {
      Component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
      path?: string;
      requiredRoles: Roles[];
      exact?: boolean;
    };
  };
}

export const routeConstants: string[] = [
  'error',
  'funnel',
  'leads',
  'todos',
  'home',
  'notFound',
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
    home: { requiredRoles: [], Component: HomePage, path: '/', exact: true },
    notFound: { requiredRoles: [], Component: NotFoundPage },
  },
};
