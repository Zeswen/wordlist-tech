import { PGBaseModel } from './PGBaseModel';

export class User extends PGBaseModel {
  static table = 'users';

  username: string;
  password: string;
}
