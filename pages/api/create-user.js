import { createId } from '../../server/mongodb/actions/User';

const handler = (req, res) =>
  createId(req.body.refresh_token)
    .then(user => {
      res.status(200).json({
        success: true,
        authorization: user._id,
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
