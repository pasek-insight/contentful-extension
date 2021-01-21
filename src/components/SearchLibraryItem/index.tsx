import { TextInput } from '@contentful/forma-36-react-components';
import React from 'react';
import useSearchQuery from '../../hooks/useSearchQuery';
import LibrrayItemTile from '../LibraryItemTile';

const SearchLibraryItems = () => {
  let debounceTimer: NodeJS.Timeout;

  const { searchResults, searchData, loading } = useSearchQuery();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => searchData(value),  1000);
  }

  return (
    <div>
      <TextInput
        disabled={loading}
        width="large"
        type="text"
        id="search"
        testId="search"
        placeholder="Search library items"
        onChange={handleSearch}
      />

      <br />

      { loading &&  <span>Loading...</span> }
      { !loading && searchResults === null && <span>No results found</span> }

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {!loading && searchResults && searchResults.map((item) => 
          <LibrrayItemTile key={item.id} {...item} />
        )}
      </div>
    </div>
  )
}

export default SearchLibraryItems;