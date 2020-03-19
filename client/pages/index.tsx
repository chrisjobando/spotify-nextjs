import fetch from 'isomorphic-fetch';
import { parseCookies } from 'nookies';

// Components
import Login from '~/components/Login/Login';
import Home from '~/components/Home/Home';

// Styling
import classes from './style.module.scss';

const Index = props => <div>{!props.authorization ? <Login /> : <Home />}</div>;

async function getUser(authorization) {
  const res = await fetch('http://localhost:3001/user');

  if (res.status === 200) return { authorization, user: res.data };
  else return { authorization };
}

Index.getInitialProps = ctx => {
  const { authorization } = parseCookies(ctx);
  const { token } = ctx.query;

  const props = getUser(authorization || token);
  return props;
};

export default Index;
