import React, { useState, useCallback, useEffect } from 'react';

import './Search.css';

type Props = {
  onSearch: (searchTerm: string) => void;
};

const Search = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  }, []);

  useEffect(() => {
    onSearch(searchTerm);
  }, [onSearch, searchTerm]);

  return (
    <div>
      <input
        className="search_input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default React.memo(Search);
