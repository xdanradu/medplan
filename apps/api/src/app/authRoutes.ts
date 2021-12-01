import { Express } from 'express';
import { check, validationResult } from 'express-validator';
import { User } from '@advanced-monorepo/shared';

export function addAuthRoutes(app: Express) {
  app.get('/api/me', (req, res) => {
    res.send({ message: 'login me' });
  });
  app.post(
    '/api/login',
    [
      check('email').isEmail().normalizeEmail(),
      check('password').isLength({ min: 6 })
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(222).json({ errors: errors.array() });
      }

      const random = Math.floor(Math.random() * 1000);
      User.create({
        email: `customer.${random}@test.com`,
        password: `${random}`
      }).then(() => {
        console.log('New user created');
      });

      console.log(req.body);
      res.send({ login: 'ok' });
    }
  );
}
