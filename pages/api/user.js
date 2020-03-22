import { findOrCreate } from '../../server/mongodb/actions/User';

const handler = (req, res) =>
  findOrCreate(req.body.authorization)
    .then(authorization => {
      console.log('auth: ' + authorization);
      res.status(200).json({
        success: true,
        payload: authorization,
      });
    })
    .catch(err =>
      res.status(400).json({
        success: false,
        message: err.message,
      })
    );

export default handler;