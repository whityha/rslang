export interface BasicAuthInfo {
  id: string;
  name: string;
}

export interface User extends BasicAuthInfo {
  email?: string;
  password?: string;
  token?: string;
}
