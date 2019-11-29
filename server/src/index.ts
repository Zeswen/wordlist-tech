import dotenv from 'dotenv';
import express from 'express';

import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

import { WordRoutes } from './routes';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    dotenv.config();
    this.app.set('port', process.env.PORT || 3004);
    this.app.use(bodyParser.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(compression());
    this.app.use(cors());
  }

  public routes(): void {
    this.app.use('/api/words', new WordRoutes().router);
  }

  public start(): void {
    const port = this.app.get('port') || 3004;
    this.app.listen(port, () => {
      console.log(`API is running at http://localhost:${port}`);
    });
  }
}

const server = new Server();

server.start();
