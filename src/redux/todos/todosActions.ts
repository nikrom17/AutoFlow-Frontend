import * as todosTypes from './todosTypes';
import api from 'src/api/api';

// ------ SIMPLE ACTIONS ------ //

// fetch all todos
export const fetchTodosStart = () => ({
  type: todosTypes.FETCH_TODOS_START,
});

export const fetchTodosSuccess = (data: todosTypes.TodosState) => ({
  type: todosTypes.FETCH_TODOS_SUCCESS,
  data,
});

export const fetchTodosFailed = (error: string) => ({
  type: todosTypes.FETCH_TODOS_FAILED,
  error,
});

// fetch a single todo
export const fetchTodoStart = () => ({
  type: todosTypes.FETCH_TODO_START,
});

export const fetchTodoSuccess = (data: todosTypes.TodosState) => ({
  type: todosTypes.FETCH_TODO_SUCCESS,
  data,
});

export const fetchTodoFailed = (error: string) => ({
  type: todosTypes.FETCH_TODO_FAILED,
  error,
});

// ------ COMPLEX ACTIONS ------ //

// fetch all todos
export const fetchTodos: todosTypes.FetchTodos = () => async (dispatch) => {
  try {
    dispatch(fetchTodosStart());
    const response = await api.get('todos');
    dispatch(fetchTodosSuccess(response));
  } catch (error) {
    dispatch(fetchTodosFailed(error));
  }
};

// fetch a single todo
export const fetchTodo: todosTypes.FetchTodo = (todoId: number) => async (dispatch) => {
  try {
    dispatch(fetchTodoStart());
    const response = await api.get(`todos/${todoId}`);
    dispatch(fetchTodoSuccess(response));
  } catch (error) {
    dispatch(fetchTodoFailed(error));
  }
};
