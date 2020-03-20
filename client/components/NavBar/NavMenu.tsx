import Link from 'next/link';

// Styling
import classes from './navbar.module.scss';

const NavMenu = () => (
  <div className={classes.NavMenu}>
    <div className={classes.NavLinks}>
      <Link href="/">home.</Link>
      <Link href="/browse">browse.</Link>
      <Link href="/stats">stats.</Link>
    </div>
  </div>
);

export default NavMenu;
