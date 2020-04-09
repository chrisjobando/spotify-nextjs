import React, { useEffect, useContext } from 'react';
import { destroyCookie } from 'nookies';
import Link from 'next/link';
import { toast } from 'react-toastify';

// Global Context
import { AppContext } from '../AppContext';

// Styling
import classes from './navbar.module.scss';

const NavMenu = ({ onClick }) => {
  const { setPlayerState } = useContext(AppContext);

  const notifySignOut = () => toast('Signed Out!');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={classes.NavMenu}>
      <div onClick={onClick} className="Link">
        <Link href="/app">
          <span>Home</span>
        </Link>
      </div>
      <div onClick={onClick} className="Link">
        <Link href="/app/stats">
          <span>Stats</span>
        </Link>
      </div>
      <div onClick={onClick} className="Link">
        <Link href="/">
          <span
            onClick={() => {
              destroyCookie(null, 'authorization');
              setPlayerState(0);
              notifySignOut();
            }}
          >
            Sign Out
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
