export type SessionDto = {
  accessToken: string;
  user: {
    email: string;
    id: string;
    login: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type RequestRegisterBody = {
  email: string;
  login: string;
  password: string;
  passwordConfirm: string;
};
export type RequestLoginBody = {
  login: string;
  password: string;
};
