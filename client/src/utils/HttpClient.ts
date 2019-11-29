import axios from 'axios';
import { Response } from '.';
import { WordModel } from '../models/Word';

export default class HttpClient {
  static API_URL: string = process.env.API_URL || 'http://localhost:3004/api';

  static async getWords(): Promise<WordModel[]> {
    const route = `/words`;
    const res: Response<WordModel[]> = await axios.get(this.API_URL + route);
    if (res.data && !res.error) {
      return res.data;
    } else {
      throw res.error;
    }
  }

  static async postWord(values: WordModel): Promise<WordModel[]> {
    const route = `/words`;
    const res: Response<WordModel[]> = await axios.post(this.API_URL + route, values);
    if (res.data && !res.error) {
      return res.data;
    } else {
      throw res.error;
    }
  }

  static async deleteWord(id: string): Promise<WordModel[]> {
    const route = `/words/${id}`;
    const res: Response<WordModel[]> = await axios.delete(this.API_URL + route);
    if (res.data && !res.error) {
      return res.data;
    } else {
      throw res.error;
    }
  }
}
