import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/auth/userSlice';
import diariesReducer from '../features/diary/diarySlice';
import entriesReducer from '../features/entry/entriesSlice';
import editorReducer from '../features/entry/editorSlice';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    entries: entriesReducer,
    diaries: diariesReducer,
    editor: editorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;