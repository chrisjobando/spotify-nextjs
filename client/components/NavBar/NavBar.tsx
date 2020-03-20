import React, { useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// NavMenu
import NavMenu from './NavMenu';

// Styling
import classes from './navbar.module.scss';

const NavBar = () => {
  const [isOpen, toggle] = useState(false);
  return (
    <div className={classes.NavBar}>
      {isOpen ? (
        <>
          <FontAwesomeIcon
            onClick={() => toggle(false)}
            icon={faTimes}
            className={classes.MenuIcon}
          />
          <NavMenu />
        </>
      ) : (
        <FontAwesomeIcon
          onClick={() => toggle(true)}
          icon={faBars}
          className={classes.MenuIcon}
        />
      )}
    </div>
  );
};

export default NavBar;
