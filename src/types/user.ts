export interface BasicAuthInfo {
  id: string;
  name: string;
}

export interface User extends BasicAuthInfo {
  email?: string;
  token?: string;
}

export interface UserRegResponse extends BasicAuthInfo {
  email: string;
}

export interface UserAuthDTO {
  email: string;
  password: string;
  name?: string;
}
