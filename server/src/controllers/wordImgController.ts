import { Request, Response } from 'express';
import { jsonResponse } from '../../utils/index';
import { WordImg } from '../models';

export class WordImgController {
  public async get(_: Request, res: Response): Promise<void> {
    const words = await WordImg.find<WordImg>();
    if (words) {
      jsonResponse<WordImg[]>(res, 200, words);
    } else {
      jsonResponse(res, 500, null, { message: 'No words found' } as Error);
    }
  }
}
