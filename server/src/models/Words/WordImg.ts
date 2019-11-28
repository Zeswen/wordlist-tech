import { PGBaseModel } from '../PGBaseModel';

export class WordImg extends PGBaseModel {
  static table = 'words_img';

  id: string;
  url: string;
}
