import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://pets-zywq.onrender.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /api/users/register
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
    '/users/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post(
                '/api/users/register',
                credentials
            );
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * POST @ api/users/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
    '/users/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post(
                'api/users/login',
                credentials
            );
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk(
    '/users/logout',
    async (_, thunkAPI) => {
        try {
            const response = await axios.post(
                'api/users/logout'
            );
            clearAuthHeader();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
    '/users/current',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const response = await axios.get(
                'api/users/current'
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
