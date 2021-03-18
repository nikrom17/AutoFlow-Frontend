import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TodosPage from '@pages/todosPage/todosPage';
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

export const routeConstants: string[] = ['funnel', 'leads', 'todos', 'home', 'notFound'];

export const routes: Routes = {
  allIds: routeConstants,
  byId: {
    funnel: {
      requiredRoles: [],
      Component: OpportunitiesPage,
      path: '/opportunities',
      exact: true,
    },
    leads: {
      requiredRoles: [],
      Component: LeadsPage,
      path: '/leads',
      exact: true,
    },
    todos: {
      requiredRoles: [],
      Component: TodosPage,
      path: '/todos',
      exact: true,
    },
    home: { requiredRoles: [], Component: HomePage, path: '/', exact: true },
    notFound: { requiredRoles: [], Component: NotFoundPage },
  },
};
