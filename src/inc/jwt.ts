export const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const isJwtExpired = (token: string) => {
  const jwt = parseJwt(token);
  if (!jwt) return true;
  const expires = jwt.exp;
  const now = Math.floor(Date.now() / 1000);
  return now > expires;
};
