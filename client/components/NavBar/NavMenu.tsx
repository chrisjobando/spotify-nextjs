import React, { useEffect, useContext } from 'react';
import { destroyCookie } from 'nookies';
import Link from 'next/link';
import Router from 'next/router';

// Global Context
import AppContext from '../AppContext';

// Styling
import classes from './navbar.module.scss';

const NavMenu = ({ onClick }) => {
  const { setPlayerState } = useContext(AppContext);

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
        <Link href="/app/browse">
          <span
            onClick={() => {
              destroyCookie(null, 'authorization');
              setPlayerState(0);
              Router.push('/');
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
