import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://pets-zywq.onrender.com/api";

export const fetchNotices = createAsyncThunk(
  "notices/getAll",
  async (data, thunkAPI) => {
    const { page, category } = data;
    console.log("page", category);
    try {
      const response = await axios.get("/notices/search?", {
        params: {
          category: category,
          page: page,
          limit: 4,
        },
      });
      console.log("response", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesaage);
    }
  }
);
// "lost/found";
// sale;
// "Red ant";

export const fetchNoticeById = createAsyncThunk(
  "notices/getById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesaage);
    }
  }
);

export const addNotice = createAsyncThunk(
  "notices/addNotices",
  async (notice, thunkAPI) => {
    try {
      const response = await axios.post("/notices", notice);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  "notices/deleteNotices",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
