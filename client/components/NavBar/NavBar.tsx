import React, { useState, useContext } from 'react';
import { destroyCookie } from 'nookies';
import Router from 'next/router';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// NavMenu
import NavMenu from './NavMenu';

// Global Context
import SpotifyContext from '../SpotifyContext';

// Styling
import classes from './navbar.module.scss';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const { setPlayerState } = useContext(SpotifyContext);

  return (
    <>
      <div className={classes.NavBar}>
        {isOpen ? (
          <>
            <FontAwesomeIcon
              onClick={() => setOpen(!isOpen)}
              icon={faTimes}
              className={classes.MenuIcon}
            />
          </>
        ) : (
          <FontAwesomeIcon
            onClick={() => setOpen(!isOpen)}
            icon={faBars}
            className={classes.MenuIcon}
          />
        )}
        <p
          style={{ cursor: 'pointer' }}
          onClick={() => {
            destroyCookie(null, 'authorization');
            setPlayerState(0);
            Router.push('/');
          }}
        >
          Sign Out
        </p>
      </div>
      {isOpen && <NavMenu onClick={() => setOpen(!isOpen)} />}
    </>
  );
};

export default NavBar;
