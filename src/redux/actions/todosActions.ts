import * as todosTypes from "../types/todosTypes";
import api from "src/api/api";

// ------ SIMPLE ACTIONS ------ //

// fetch all todos
export const fetchTodosStart = () => ({
  type: todosTypes.FETCH_TODOS_START,
});

export const fetchTodosSuccess = (
  data: todosTypes.TodosState
) => ({
  type: todosTypes.FETCH_TODOS_SUCCESS,
  data,
});

export const fetchTodosFailed = () => ({
  type: todosTypes.FETCH_TODOS_FAILED,
});

// fetch all todos for a client
export const fetchClientTodosStart = () => ({
  type: todosTypes.FETCH_CLIENT_TODOS_START,
});

export const fetchClientTodosSuccess = (
  data: todosTypes.TodosState
) => ({
  type: todosTypes.FETCH_CLIENT_TODOS_SUCCESS,
  data,
});

export const fetchClientTodosFailed = () => ({
  type: todosTypes.FETCH_CLIENT_TODOS_FAILED,
});

// fetch a single todo
export const fetchTodoStart = () => ({
  type: todosTypes.FETCH_TODO_START,
});

export const fetchTodoSuccess = (
  data: todosTypes.TodosState
) => ({
  type: todosTypes.FETCH_TODO_SUCCESS,
  data,
});

export const fetchTodoFailed = () => ({
  type: todosTypes.FETCH_TODO_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

// Admin

// fetch all todos
export const fetchTodos: todosTypes.FetchTodos = () => async (
  dispatch
) => {
  try {
    dispatch(fetchTodosStart());
    const response = await api.get("todos");
    dispatch(fetchTodosSuccess(response));
  } catch (error) {
    dispatch(fetchTodosFailed());
  }
};

// Client

// fetch all todos for a client
export const fetchClientTodos: todosTypes.FetchClientTodos = (
  clientId: number
) => async (dispatch) => {
  try {
    dispatch(fetchClientTodosStart());
    const response = await api.get(`todos/client/${clientId}`);
    dispatch(fetchClientTodosSuccess(response));
  } catch (error) {
    dispatch(fetchClientTodosFailed());
  }
};

// Both

// fetch a single todo
export const fetchTodo: todosTypes.FetchTodo = (
  todoId: number
) => async (dispatch) => {
  try {
    dispatch(fetchTodoStart());
    const response = await api.get(`todos/${todoId}`);
    dispatch(fetchTodoSuccess(response));
  } catch (error) {
    dispatch(fetchTodoFailed());
  }
};
