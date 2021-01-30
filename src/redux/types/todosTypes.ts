import { ThunkType, DefaultSchema } from "./commonTypes";

// ------ COMMON INTERFACES ------ //
export interface Todos {
  id: number;
  clientId: number;
  date_created: Date;
  item: string;
  notes: string;
  date_fulfilled: Date;
  pickup_location_id: number;
  dropoff_location_id: number;
}

export interface TodosState {
  todos: DefaultSchema<Todos>;
}

// ------ THUNK ACTION TYPES ------ //
export type FetchTodos = () => ThunkType;
export type FetchClientTodos = (clientId: number) => ThunkType;
export type FetchTodo = (TodoId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILED = "FETCH_TODOS_FAILED";

export const FETCH_CLIENT_TODOS_START = "FETCH_CLIENT_TODOS_START";
export const FETCH_CLIENT_TODOS_SUCCESS =
  "FETCH_CLIENT_TODOS_SUCCESS";
export const FETCH_CLIENT_TODOS_FAILED = "FETCH_CLIENT_TODOS_FAILED";

export const FETCH_TODO_START = "FETCH_TODO_START";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILED = "FETCH_TODO_FAILED";

// ------ TYPES ------ //
interface FetchTodosSuccess {
  type: typeof FETCH_TODOS_SUCCESS;
  data: TodosState;
}

interface FetchClientTodosSuccess {
  type: typeof FETCH_CLIENT_TODOS_SUCCESS;
  data: TodosState;
}

interface FetchTodoSuccess {
  type: typeof FETCH_TODO_SUCCESS;
  data: TodosState;
}

export type Types =
  | FetchTodosSuccess
  | FetchClientTodosSuccess
  | FetchTodoSuccess;
