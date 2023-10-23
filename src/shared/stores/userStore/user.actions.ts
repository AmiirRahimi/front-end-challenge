import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User] Load Users');
export const usersLoaded = createAction('[User] Users Loaded', props<{ users: any[] }>());