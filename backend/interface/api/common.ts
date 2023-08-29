export interface ContextType {
  params: {
    slug?: string;
    id?: string | number;
  };
}
export interface ResponseDataType<T> {
  success: boolean;
  message: string;
  data: T;
}
