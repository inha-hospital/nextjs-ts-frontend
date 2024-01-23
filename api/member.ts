import apiClient from "api";
import { AxiosResponse } from "axios";

export interface postLoginRequest {
  email: string;
  password: string;
}
export interface postLoginResponse {
  access_token: string;
  refresh_token: string;
}
export const postLogin = (
  data: postLoginRequest
): Promise<AxiosResponse<postLoginResponse>> => {
  return apiClient.post("/api/login", data);
};
