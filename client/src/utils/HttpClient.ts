import axios from 'axios';
import { Response } from '.';
import Word from '../models/Word';

export default class HttpClient {
  static API_URL: string = process.env.API_URL || 'http://localhost:3004/api';

  static async getWords(): Promise<Word[]> {
    const route = `/words`;
    const res: Response<Word[]> = await axios.get(this.API_URL + route);
    if (res.data && !res.error) {
      console.log(res.data);
      return res.data;
    } else {
      throw res.error;
    }
  }
}
