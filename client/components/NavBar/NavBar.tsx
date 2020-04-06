import React, { useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

// NavMenu
import NavMenu from './NavMenu';

// Styling
import classes from './navbar.module.scss';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={classes.NavBar}>
        {isOpen ? (
          <FontAwesomeIcon
            onClick={() => setOpen(!isOpen)}
            icon={faTimes}
            className={classes.MenuIcon}
          />
        ) : (
          <>
            <FontAwesomeIcon
              onClick={() => setOpen(!isOpen)}
              icon={faBars}
              className={classes.MenuIcon}
            />
            <FontAwesomeIcon icon={faSearch} className={classes.BrowseIcon} />
          </>
        )}
      </div>
      {isOpen && <NavMenu onClick={() => setOpen(!isOpen)} />}
    </>
  );
};

export default NavBar;
