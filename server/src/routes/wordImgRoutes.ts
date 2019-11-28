import { Router } from 'express';
import { WordImgController } from '../controllers';

export class WordImgRoutes {
  public router: Router;
  public wordImgController: WordImgController = new WordImgController();

  constructor() {
    this.router = Router();
    this.routes();
  }
  public routes(): void {
    this.router.get('/', this.wordImgController.get);
  }
}
