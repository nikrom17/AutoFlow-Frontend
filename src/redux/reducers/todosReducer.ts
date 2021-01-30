import { cloneDeep } from "lodash";
import * as todosTypes from "../types/todosTypes";

export const initialTodosState: todosTypes.TodosState = {
  todos: {
    allIds: [],
    byId: {},
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
        todos: { ...action.data.todos },
      };
    case todosTypes.FETCH_TODO_SUCCESS: //todo verify allIds is merged correctly
      return {
        todos: {
          allIds: [
            ...state.todos.allIds,
            ...action.data.todos.allIds,
          ],
          byId: {
            ...cloneDeep(state.todos.byId),
            ...action.data.todos.byId,
          },
        },
      };
    default:
      return state;
  }
};
