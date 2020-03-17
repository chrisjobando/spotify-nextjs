import fetch from "isomorphic-fetch";
import { parseCookies } from "nookies";

const Home = props => (
  <div className="container">
    <main>
      <h1>Welcome</h1>
      {!props.authorization && (
        <a href={"http://localhost:3001/auth/spotify"}>Click here to login</a>
      )}
    </main>
  </div>
);

async function getUser(authorization) {
  const res = await fetch("http://localhost:3001/user");

  if (res.status === 200) return { authorization, user: res.data };
  else return { authorization };
}

Home.getInitialProps = ctx => {
  const { authorization } = parseCookies(ctx);
  const { token } = ctx.query;

  const props = getUser(authorization || token);
  return props;
};

export default Home;
