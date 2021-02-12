import { cloneDeep } from 'lodash';
import * as todosTypes from '../types/todosTypes';

export const initialTodosState: todosTypes.TodosState = {
  allIds: [1, 2, 3, 4, 5, 6, 7, 8],
  byId: {
    1: {
      id: 1,
      completed: false,
      description: 'Send email',
      leadId: 1,
      priority_rank: 1,
      status: 'Follow Up',
    },
    2: {
      id: 2,
      completed: false,
      description: 'Send Email',
      leadId: 2,
      priority_rank: 2,
      status: 'Follow Up',
    },
    3: {
      id: 3,
      completed: false,
      description: 'Create engagement letter',
      leadId: 3,
      priority_rank: 3,
      status: 'Follow Up',
    },
    4: {
      id: 4,
      completed: false,
      description: 'Do a thing',
      leadId: 4,
      priority_rank: 4,
      status: 'With Client',
    },
    5: {
      id: 5,
      completed: false,
      description: 'Do a thing',
      leadId: 5,
      priority_rank: 5,
      status: 'With Client',
    },
    6: {
      id: 6,
      completed: false,
      description: 'Do a thing',
      leadId: 6,
      priority_rank: 6,
      status: 'Follow Up',
    },
    7: {
      id: 7,
      completed: false,
      description: 'Do a thing',
      leadId: 7,
      priority_rank: 7,
      status: 'Follow Up',
    },
    8: {
      id: 8,
      completed: false,
      description: 'Do a thing',
      leadId: 8,
      priority_rank: 8,
      status: 'Follow Up',
    },
    9: {
      id: 9,
      completed: false,
      description: 'Do a thing',
      leadId: 9,
      priority_rank: 9,
      status: 'Follow Up',
    },
  },
};

export const todosReducer = (
  state = initialTodosState,
  action: todosTypes.Types
): todosTypes.TodosState => {
  switch (action.type) {
    case todosTypes.FETCH_TODOS_SUCCESS:
    case todosTypes.FETCH_CLIENT_TODOS_SUCCESS:
      return {
        ...action.data,
      };
    case todosTypes.FETCH_TODO_SUCCESS: //todo verify allIds is merged correctly
      return {
        allIds: [...state.allIds, ...action.data.allIds],
        byId: {
          ...cloneDeep(state.byId),
          ...action.data.byId,
        },
      };
    default:
      return state;
  }
};
