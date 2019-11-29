import { Request, Response } from 'express';
import { jsonResponse } from '../utils/index';
import { WordModel } from '../models';

export class WordController {
  public async get(_: Request, res: Response): Promise<void> {
    try {
      const words = await WordModel.find<WordModel>();
      if (words) {
        jsonResponse<WordModel[]>(res, 200, words);
      } else {
        jsonResponse(res, 500, null, { message: 'No words found' } as Error);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  public async post(req: Request, res: Response): Promise<void> {
    const { name, description, audio } = req.body;
    try {
      await WordModel.create({ name, description, audio });
      jsonResponse<string>(res, 200, 'Word created successfully.');
    } catch (err) {
      jsonResponse(res, 500, null, err);
    }
  }
}
