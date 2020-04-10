import React, { useState, useContext } from 'react';
import { destroyCookie } from 'nookies';
import Link from 'next/link';
import { toast } from 'react-toastify';

// Global Context
import { AppContext } from '../AppContext';

// API Call
import { deleteUser } from '../../actions/api';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

// NavMenu
import NavMenu from './NavMenu';

// Styling
import classes from './navbar.module.scss';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const { setPlayerState, userAuth } = useContext(AppContext);

  const notifySignOut = () => toast('Signed Out!');

  return (
    <>
      <div className={classes.Background} />
      <div className={classes.Background} />
      <div className={classes.NavBar}>
        {isOpen ? (
          <FontAwesomeIcon
            onClick={() => {
              setOpen(false);
            }}
            icon={faTimes}
            className={classes.MenuIcon}
          />
        ) : (
          <>
            <div className={classes.NavBtn}>
              <FontAwesomeIcon
                onClick={() => setOpen(true)}
                icon={faBars}
                className={classes.MenuIcon}
              />
            </div>
            <div className={classes.NavLinks}>
              <div className={classes.Link2}>
                <Link href="/app">
                  <h2>Home</h2>
                </Link>
              </div>
              <div className={classes.Link2}>
                <Link href="/app/stats">
                  <h2>Stats</h2>
                </Link>
              </div>
              <div className={classes.Link2}>
                <Link href="/">
                  <h2
                    onClick={() => {
                      deleteUser(userAuth);
                      destroyCookie(null, 'authorization');
                      setPlayerState(0);
                      notifySignOut();
                    }}
                  >
                    Sign Out
                  </h2>
                </Link>
              </div>
            </div>

            <Link href="/app/search">
              <div>
                <FontAwesomeIcon
                  icon={faSearch}
                  className={classes.BrowseIcon}
                />
              </div>
            </Link>
          </>
        )}
      </div>
      {isOpen && <NavMenu onClick={() => setOpen(!isOpen)} />}
    </>
  );
};

export default NavBar;
