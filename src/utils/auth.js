import { jwtDecode } from "jwt-decode";
import URL from "../Components/config/API";
import axios from "axios";

export const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch (err) {
    return false;
  }
};


export const verifyTokenByAPI = async () => {
  const token = localStorage.getItem("token");

  if (!token) return false;

  try {
    const res = await axios.get(
      `${URL.BASE_URL}/verify-token`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return res.data.valid === true;
  } catch (error) {
    localStorage.removeItem("token")
    return false;
  }
};

export const isToken = (token) => {
  try {
    return token;
  } catch (err) {
    return false;
  }
};
