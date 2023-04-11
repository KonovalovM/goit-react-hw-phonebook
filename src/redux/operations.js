import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import{ instanceContact} from 'Api/ContactsApi';

import {
  getContacts,
  addContacts,
  deleteContacts,
  registerNewUser,
  logInUser,
  logOutUser
} from 'Api/ContactsApi';

const token = {
  set(token) {
    instanceContact.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceContact.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = createAsyncThunk('contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact  = createAsyncThunk('contacts/add',
    async (newContact, { rejectWithValue }) => {
        try {
            const data  = await addContacts(newContact)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const deleteContact = createAsyncThunk('contacts/delete',
    async (id, { rejectWithValue }) => {
        try {
            const data  = await deleteContacts(id)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

/*
* POST @ /users/signup
* body: { name, email, password }
* После успешной регистрации добавляем токен в HTTP-заголовок 
*/
export const register = createAsyncThunk('auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await registerNewUser(credentials);
      token.set(user.token);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/*
* POST @ /users/login
* body: { email, password }
* После успешного логина добавляем токен в HTTP-заголовок 
*/
export const logIn = createAsyncThunk('auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await logInUser(credentials);
      token.set(user.token);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/*
* POST @ /users/logout
* body: Authorization = Bearer token
* После успешного логаута, удаляем токен из HTTP-заголовока 
*/
export const logOut = createAsyncThunk('auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await logOutUser();
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
/*
* GET @ /users/current
* headers: Authorization = Bearer token
* 
* 1. Забираем токен из стейта через getState()
* 2. Если токена нет, выходим(отклоняем)
* 3. Если токен есть, добавляем его в HTTP-заголовок и выполняем операцию  
 */
export const refreshUser = createAsyncThunk('auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log(state);
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await instanceContact.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);