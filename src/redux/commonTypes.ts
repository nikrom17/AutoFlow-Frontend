import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from './rootReducer';

export interface DefaultSchema<T> {
  allIds: number[];
  byId: {
    [key in number]: T;
  };
  status: 'idle' | 'fetching';
  error: string | null;
}

export type ThunkType = ThunkAction<void, RootState, null, Action<string>>;

export type GenericThunkAction = () => ThunkType;
