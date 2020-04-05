import { findById } from '../../server/mongodb/actions/User';

const handler = (req, res) =>
  findById(req.body.authorization)
    .then(user => {
      res.status(200).json({
        success: true,
        refresh: user.refresh,
      });
    })
    .catch(err =>
      res.status(400).json({
        success: false,
        message: err.message,
      })
    );

export default handler;
