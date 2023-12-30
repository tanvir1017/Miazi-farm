export type WithClassName<T = {}> = T & {
  className?: string;
};

export type UserSession = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};
export interface SessionProps {
  session: UserSession | null;
}
