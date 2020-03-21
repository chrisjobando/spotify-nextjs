import React, { useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// NavMenu
import NavMenu from './NavMenu';

// Styling
import classes from './navbar.module.scss';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={classes.NavBar}>
      {isOpen ? (
        <>
          <FontAwesomeIcon
            onClick={toggle}
            icon={faTimes}
            className={classes.MenuIcon}
          />
          <NavMenu onClick={toggle} />
        </>
      ) : (
        <FontAwesomeIcon
          onClick={toggle}
          icon={faBars}
          className={classes.MenuIcon}
        />
      )}
    </div>
  );
};

export default NavBar;
