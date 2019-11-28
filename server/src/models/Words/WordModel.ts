import { PGBaseModel } from '../PGBaseModel';

export class WordModel extends PGBaseModel {
  id: string;
  name: string;
  description: string;
  audio?: string;
}
