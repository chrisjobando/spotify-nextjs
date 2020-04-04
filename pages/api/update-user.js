import { updateToken } from '../../server/mongodb/actions/User';

const handler = (req, res) =>
  updateToken(req.body.authorization, req.body.access)
    .then(user => {
      res.status(200).json({
        success: true,
        user,
      });
    })
    .catch(err =>
      res.status(400).json({
        success: false,
        message: err.message,
      })
    );

export default handler;
