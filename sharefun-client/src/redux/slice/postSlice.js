import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, getUserIdfromToken } from "./authSlice";

export const createPost = createAsyncThunk(
  "post/createPost",
  async (data, { rejectWithValue }) => {
    try {
      const userId = getUserIdfromToken();
      data.userId = userId;
      const response = await axios.post(
        `${baseUrl}/post/createPost`,
        data
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response.data);
    }
  }
);

// export const createPost = async (data) => {
//   try {
//     const userId = getUserIdfromToken();
//     data.userId = userId;
//     const response = await axios.post(`${baseUrl}/post/createPost`, da);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getAllPosts = createAsyncThunk(
  "post/getAllPost",
  async (__, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/post/getAllPost`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
