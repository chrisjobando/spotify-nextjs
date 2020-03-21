import nextConnect from 'next-connect';
import jwt from 'jsonwebtoken';
import userService from '../../server/db/services/user';

const jwtKey = process.env.JWT_KEY;
const handler = nextConnect();

handler.use((req, res, next) => {
  const token = req.headers['authorization'];

  jwt.verify(token, jwtKey, function(err, data) {
    if (err) {
      res.status(401).send({ error: 'NotAuthorized' });
    } else {
      req.user = data;
      next();
    }
  });
});

handler.get('/', async (req, res) => {
  user = await userService.findById(req.user.id);

  res.send(user);
});

export default handler;
