import { store } from '../store';

export function getUID() {
  return store.getState().auth.userData.id;
}

export function isUserAuth() {
  return store.getState().auth.isAuth;
}

export function getUserName() {
  return store.getState().auth.userData.name;
}
