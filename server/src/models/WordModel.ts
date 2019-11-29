import { PGBaseModel } from './PGBaseModel';

export class WordModel extends PGBaseModel {
  static table = 'Words';
  'image': string;
  'es.name': string;
  'es.description': string;
  'es.audio': string;
  'en.name': string;
  'en.description': string;
  'en.audio': string;
}
