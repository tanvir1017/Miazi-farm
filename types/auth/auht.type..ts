export type ResponseUserTypeFromDb = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  credential: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
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
