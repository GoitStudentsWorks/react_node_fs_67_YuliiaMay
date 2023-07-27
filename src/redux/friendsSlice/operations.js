import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3010/api";

export const fetchFriends = createAsyncThunk(
  "sponsors/getall",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/sponsors/getall");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesaage);
    }
  }
);
