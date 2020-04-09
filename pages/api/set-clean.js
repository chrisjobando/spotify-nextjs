import { updateClean } from '../../server/mongodb/actions/User';

const handler = (req, res) =>
  updateClean(req.cookies.authorization, req.body.clean)
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
