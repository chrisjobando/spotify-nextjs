import React, { useState, useEffect, useContext } from 'react';
import { destroyCookie } from 'nookies';
import Link from 'next/link';

// Global Context
import AppContext from '../AppContext';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

// NavMenu
import NavMenu from './NavMenu';

// Styling
import classes from './navbar.module.scss';

const NavBar2 = () => {
  const [isOpen, setOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('#001A51');
  const { setPlayerState } = useContext(AppContext);

  const listenScrollEvent = () => {
    window.scrollY > 200 ? setHeaderColor('white') : setHeaderColor('#001A51');
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <div className={classes.NavBar2}>
        {isOpen ? (
          <FontAwesomeIcon
            onClick={() => setOpen(!isOpen)}
            icon={faTimes}
            className={classes.MenuIcon}
          />
        ) : (
          <>
            <div style={{ color: headerColor }} className={classes.NavBtn}>
              <FontAwesomeIcon
                onClick={() => setOpen(true)}
                icon={faBars}
                className={classes.MenuIcon}
              />
            </div>
            <div style={{ color: headerColor }} className={classes.NavLinks}>
              <div className={classes.Link2}>
                <Link href="/app">
                  <h2>Home</h2>
                </Link>
              </div>
              <div style={{ color: headerColor }} className={classes.Link2}>
                <Link href="/app/stats">
                  <h2>Stats</h2>
                </Link>
              </div>
              <div style={{ color: headerColor }} className={classes.Link2}>
                <Link href="/">
                  <h2
                    onClick={() => {
                      destroyCookie(null, 'authorization');
                      setPlayerState(0);
                    }}
                  >
                    Sign Out
                  </h2>
                </Link>
              </div>
            </div>

            <Link href="/app/browse">
              <FontAwesomeIcon
                style={{ color: headerColor }}
                icon={faSearch}
                className={classes.BrowseIcon}
              />
            </Link>
          </>
        )}
      </div>
      {isOpen && <NavMenu onClick={() => setOpen(!isOpen)} />}
    </>
  );
};

export default NavBar2;
