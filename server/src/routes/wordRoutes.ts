import { Router } from 'express';
import { WordController } from '../controllers';

export class WordRoutes {
  public router: Router;
  public wordController: WordController = new WordController();

  constructor() {
    this.router = Router();
    this.routes();
  }
  public routes(): void {
    this.router.get('/', this.wordController.get);
    this.router.post('/', this.wordController.post);
  }
}
