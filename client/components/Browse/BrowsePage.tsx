import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

// Results Component
import BrowseResults from './BrowseResults';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Styling
import classes from './browse.module.scss';

const BrowsePage = () => {
  const [searchQuery, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(searchQuery, 1000);

  return (
    <div className={classes.BrowseContent}>
      <div className={classes.BrowseBar}>
        <FontAwesomeIcon icon={faSearch} className={classes.BrowseIcon} />
        <input
          placeholder="Search for a song, artist, or album"
          type="test"
          onChange={e => {
            setQuery(e.target.value);
          }}
          className={classes.SearchBar}
        />
      </div>
      {debouncedQuery !== '' && <BrowseResults />}
    </div>
  );
};

export default BrowsePage;
