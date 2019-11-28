import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import passport from 'passport';
import '../auth/passportHandler';
import { User } from '../models/User';
import { JWT_SECRET } from '../../utils/secrets';
import { jsonResponse } from '../../utils';

export class UserController {
  public async registerUser(req: Request, res: Response): Promise<void> {
    const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    try {
      await User.create({
        username: req.body.username,
        password: hashedPassword,
      });
    } catch (err) {
      console.error(err);
    }

    const token = jwt.sign({ username: req.body.username }, JWT_SECRET);
    jsonResponse(res, 200, { token });
  }

  public authenticateUser(_: Request, res: Response, next: NextFunction): void {
    passport.authenticate('local', function(err, user) {
      if (err) return next(err);
      if (!user) {
        return jsonResponse(res, 401, null, err);
      } else {
        const token = jwt.sign({ username: user.username }, JWT_SECRET);
        return jsonResponse(res, 200, { token: token });
      }
    });
  }
}
