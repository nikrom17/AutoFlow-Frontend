import { cloneDeep } from 'lodash';
import * as todosTypes from './todosTypes';

export const initialTodosState: todosTypes.TodosState = {
  allIds: [],
  byId: {},
  status: 'idle',
  error: null,
};

export const todosReducer = (
  state = initialTodosState,
  action: todosTypes.Types
): todosTypes.TodosState => {
  switch (action.type) {
    // ------- Start -------- //
    case todosTypes.FETCH_TODOS_START:
    case todosTypes.FETCH_TODO_START:
      return {
        ...state,
        status: 'fetching',
      };
    // ------- Success -------- //
    case todosTypes.FETCH_TODOS_SUCCESS:
      return {
        ...action.data.todos,
        status: 'idle',
        error: null,
      };
    case todosTypes.FETCH_TODO_SUCCESS:
      return {
        allIds: [...state.allIds, ...action.data.todos.allIds],
        byId: {
          ...cloneDeep(state.byId),
          ...action.data.todos.byId,
        },
        status: 'idle',
        error: null,
      };
    // ------- Failed -------- //
    case todosTypes.FETCH_TODOS_FAILED:
    case todosTypes.FETCH_TODO_FAILED:
      return {
        ...state,
        status: 'idle',
        error: action.error,
      };
    default:
      return state;
  }
};
