import Link from 'next/link';

// Styling
import classes from './navbar.module.scss';

const NavMenu = ({ onClick }) => (
  <div className={classes.NavMenu}>
    <div className={classes.NavLinks}>
      <div onClick={onClick} className={classes.Link}>
        <Link href="/app">
          <span>home.</span>
        </Link>
      </div>
      <div onClick={onClick} className={classes.Link}>
        <Link href="/app/browse">
          <span>browse.</span>
        </Link>
      </div>
      <div onClick={onClick} className={classes.Link}>
        <Link href="/app/stats">
          <span>stats.</span>
        </Link>
      </div>
    </div>
  </div>
);

export default NavMenu;
