import Link from 'next/link';

// Styling
import classes from './navbar.module.scss';

const NavMenu = ({ onClick }) => (
  <div className={classes.NavMenu}>
    <div className={classes.NavLinks}>
      <div onClick={onClick} className={classes.Link}>
        <Link href="/">home.</Link>
      </div>
      <div onClick={onClick} className={classes.Link}>
        <Link href="/browse">browse.</Link>
      </div>
      <div onClick={onClick} className={classes.Link}>
        <Link href="/stats">stats.</Link>
      </div>
    </div>
  </div>
);

export default NavMenu;
