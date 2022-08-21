export interface BasicAuthInfo {
  id: string;
  name: string;
}

export interface User extends BasicAuthInfo {
  email?: string;
  token?: string;
  refreshToken?: string;
}

export interface UserRegResponse extends BasicAuthInfo {
  email: string;
}

export interface UserAuthDTO {
  email: string;
  password: string;
  name?: string;
}

export interface UserLoginResponse
{
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}
