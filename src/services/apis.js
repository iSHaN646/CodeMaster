require("dotenv").config();
const BASE_URL = `https://codemaster-2x3p.onrender.com`;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
};

export const historyEndpoints = {
  HISTORY_DETAILS_API: BASE_URL + "/history/gethistoryDetails",
  CREATE_FOLDER_API: BASE_URL + "/history/addFolder",
  CREATE_SUBFOLDER_API: BASE_URL + "/history/addSubFolder",
  UPDATE_FOLDER_API: BASE_URL + "/history/updateFolder",
  UPDATE_SUBFOLDER_API: BASE_URL + "/history/updateSubFolder",
  SAVE_SUBFOLDER_API: BASE_URL + "/history/saveSubFolder",
  DELETE_FOLDER_API: BASE_URL + "/history/deleteFolder",
  DELETE_SUBFOLDER_API: BASE_URL + "/history/deleteSubFolder",
};
