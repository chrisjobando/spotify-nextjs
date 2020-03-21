import jwt from 'jsonwebtoken';
import nextConnect from 'next-connect';
import { findById } from '../../server/mongodb/actions/User';

const jwtKey = process.env.JWT_KEY;
const handler = nextConnect();

handler
  .use((req, res, next) => {
    const token = req.headers['authorization'];
    jwt.verify(token, jwtKey, function(err, data) {
      if (err) {
        res.status(401).send({ error: 'NotAuthorized' });
        console.log(Test);
      } else {
        req.user = data;
        next();
      }
    });
  })
  .get(async (req, res) => {
    user = await findById(req.user.id);
    res.send(user);
  });

export default handler;
