import passport from 'passport';
import passportLocal from 'passport-local';
import passportJwt from 'passport-jwt';
import { User } from '../models/user';
import { JWT_SECRET } from '../../utils/secrets';
import bcrypt from 'bcryptjs';

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

passport.use(
  new LocalStrategy({ usernameField: 'username' }, async (username: string, password: string, done: Function) => {
    try {
      const user = await User.findOne<User>({ username: username.toLowerCase() });
      if (!user) {
        return done(undefined, false, { message: `username ${username} not found.` });
      }

      const isMatch = bcrypt.compareSync(password, user.password);

      if (isMatch) {
        return done(undefined, user);
      }
      return done(undefined, false, { message: 'Invalid username or password.' });
    } catch (err) {
      return done(err);
    }
  }),
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async (jwtToken, done: Function) => {
      try {
        const user = await User.findOne({ username: jwtToken.username });
        if (user) {
          return done(undefined, user, jwtToken);
        } else {
          return done(undefined, false);
        }
      } catch (err) {
        return done(err, false);
      }
    },
  ),
);
