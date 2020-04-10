import React, { useState, useEffect, useContext } from 'react';
import { destroyCookie } from 'nookies';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';

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

const NavBar2 = () => {
  const [isOpen, setOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('#001A51');
  const [blurColor, setBlurColor] = useState('#c29dfd');
  const [toastColor, setToastColor] = useState(0);
  const { setPlayerState, userAuth } = useContext(AppContext);

  const listenScrollEvent = () => {
    window.scrollY > 175 ? setHeaderColor('white') : setHeaderColor('#001A51');
    window.scrollY > 175 ? setBlurColor('#272B2F') : setBlurColor('#c29dfd');
    window.scrollY > 200 ? setToastColor(1) : setToastColor(0);
  };

  const notifySignOut = () => toast('Signed Out!');

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: blurColor }}
        className={classes.Background}
      />
      <div
        style={{ backgroundColor: blurColor }}
        className={classes.Background}
      />
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

            <Link href="/app/browse">
              <>
                <FontAwesomeIcon
                  style={{ color: headerColor }}
                  icon={faSearch}
                  className={classes.BrowseIcon}
                />
              </>
            </Link>
          </>
        )}
      </div>
      {isOpen && <NavMenu onClick={() => setOpen(!isOpen)} />}
      <ToastContainer
        toastClassName={toastColor == 0 ? 'ToastContainer2' : 'ToastContainer'}
        bodyClassName={toastColor == 0 ? 'Toast2' : 'Toast'}
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </>
  );
};

export default NavBar2;
