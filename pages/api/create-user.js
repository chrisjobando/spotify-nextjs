import { createId } from '../../server/mongodb/actions/User';

const handler = (req, res) =>
  createId(req.body.tokens)
    .then(user => {
      res.status(200).json({
        success: true,
        authorization: user._id,
      });
    })
    .catch(err =>
      res.status(400).json({
        success: false,
        message: err.message,
      })
    );

export default handler;
