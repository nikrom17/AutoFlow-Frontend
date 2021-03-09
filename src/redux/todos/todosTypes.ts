import { ThunkType, DefaultSchema } from '../commonTypes';

// ------ COMMON INTERFACES ------ //
export interface Todos {
  id: number;
  completed: boolean;
  date_completed?: Date;
  date_created: Date;
  description: string;
  leadId: number;
  priority_rank: number;
}

export interface TodosState extends DefaultSchema<Todos> {}

// ------ THUNK ACTION TYPES ------ //
export type FetchTodos = () => ThunkType;
export type FetchTodo = (TodoId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED';

export const FETCH_TODO_START = 'FETCH_TODO_START';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILED = 'FETCH_TODO_FAILED';

// ------ TYPES ------ //
interface FetchTodosStart {
  type: typeof FETCH_TODOS_START;
}
interface FetchTodosSuccess {
  type: typeof FETCH_TODOS_SUCCESS;
  data: { todos: TodosState };
}
interface FetchTodosFailed {
  type: typeof FETCH_TODOS_FAILED;
  error: string;
}

interface FetchTodoStart {
  type: typeof FETCH_TODO_START;
}
interface FetchTodoSuccess {
  type: typeof FETCH_TODO_SUCCESS;
  data: { todos: TodosState };
}
interface FetchTodoFailed {
  type: typeof FETCH_TODO_FAILED;
  error: string;
}

export type Types =
  | FetchTodosStart
  | FetchTodosSuccess
  | FetchTodosFailed
  | FetchTodoStart
  | FetchTodoSuccess
  | FetchTodoFailed;
