export type Language = 'es' | 'en';

export interface Response<T> {
  OK: boolean;
  data: T | void;
  error?: Error;
}
