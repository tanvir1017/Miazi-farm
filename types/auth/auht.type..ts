export type authErrorType = {
  name?: string;
  email?: string;
  password?: string;
  success?: string;
};

export type ResponseAuthType = {
  status: number;
  message: authErrorType;
};
