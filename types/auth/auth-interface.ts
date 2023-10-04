export type GoogleUser = {
  name: string;
  email: string;
  image: string;
};
export type UserSessions = {
  session: {
    user: GoogleUser;
  };
};
