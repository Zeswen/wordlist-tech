import { Request, Response } from 'express';
import { jsonResponse } from '../../utils/index';
import { WordModel } from '../models';

export class WordController<T extends WordModel> {
  public async get(_: Request, res: Response): Promise<void> {
    // TODO: Finding way to access dynamically to a class static method by parameterizing the class (either type or class reference).
    const words = await T.find<T>();
    if (words) {
      jsonResponse<T[]>(res, 200, words);
    } else {
      jsonResponse(res, 500, null, { message: 'No words found' } as Error);
    }
  }

  public async post(req: Request, res: Response): Promise<void> {
    const { name, description, audio } = req.body;
    try {
    // TODO: Finding way to access dynamically to a class static method by parameterizing the class (either type or class reference).
      await T.create({ name, description, audio });
      jsonResponse<string>(res, 200, 'Word created successfully.');
    } catch (err) {
      jsonResponse(res, 500, null, err);
    }
  }
}
