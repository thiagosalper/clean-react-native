import { User } from '../models';

export interface GetUser {
  get(email: string, password: string): User | Error;
};
