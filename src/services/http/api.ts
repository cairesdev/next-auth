import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_PROD;

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-Requested-With, content-type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  },
});
