export function getBackendURL(): string {
  return process.env.REACT_APP_BACKEND ?? 'https://react-learnwords-example.herokuapp.com';
}

export function getFilesRoot(): string {
  const url = getBackendURL();
  return `${url}/`;
}
