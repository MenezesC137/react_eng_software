import axios from "axios"
import { parseCookies } from "nookies"

const api_client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export default api_client
