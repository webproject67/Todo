import { TOKEN_NAME } from '../utils/const';

const getToken = (): string => {
  const token = localStorage.getItem(TOKEN_NAME);
  return token ?? '';
};

const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_NAME, token);
};

const dropToken = (): void => {
  localStorage.removeItem(TOKEN_NAME);
};

export { getToken, saveToken, dropToken };
