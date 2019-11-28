import { Router } from 'express';
import { WordController } from '../controllers';
import { WordModel } from '../models';

export class WordRoutes<T extends WordModel> {
  public router: Router;
  public wordController: WordController<T> = new WordController<T>();

  constructor() {
    this.router = Router();
    this.routes();
  }
  public routes(): void {
    this.router.get('/', this.wordController.get);
    this.router.post('/', this.wordController.post);
  }
}
