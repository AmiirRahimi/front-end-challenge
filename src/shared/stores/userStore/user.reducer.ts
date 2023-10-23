import { createReducer, on } from '@ngrx/store';
import { loadUsers, usersLoaded } from './user.actions';

export interface UserState {
  users: any[];
}

export const initialState: UserState = {
  users: []
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => state),
  on(usersLoaded, (state, { users }) => ({ ...state, users }))
);