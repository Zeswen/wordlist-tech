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
    const { image, es_name, es_description, es_audio, en_name, en_description, en_audio } = req.body;
    try {
      await WordModel.create({ image, es_name, es_description, es_audio, en_name, en_description, en_audio });
      jsonResponse<string>(res, 200, 'Word created successfully.');
    } catch (err) {
      jsonResponse(res, 500, null, err);
    }
  }

  public async put(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { image, es_name, es_description, es_audio, en_name, en_description, en_audio } = req.body;
    try {
      await WordModel.update(id, { image, es_name, es_description, es_audio, en_name, en_description, en_audio });
      jsonResponse<string>(res, 200, 'Word created successfully.');
    } catch (err) {
      jsonResponse(res, 500, null, err);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await WordModel.delete(id);
      jsonResponse<string>(res, 200, 'Word created successfully.');
    } catch (err) {
      jsonResponse(res, 500, null, err);
    }
  }
}
