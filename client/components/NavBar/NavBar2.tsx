import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
            <FontAwesomeIcon
              style={{ color: headerColor }}
              onClick={() => setOpen(!isOpen)}
              icon={faBars}
              className={classes.MenuIcon}
            />
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
