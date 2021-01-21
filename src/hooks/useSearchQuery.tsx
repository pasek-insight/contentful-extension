import { useCallback, useState } from 'react';
import { LibraryItem } from '../services/libraryItem';
import { search } from '../services/search';

export default function useSearchQuery() {
  const [searchResults, setSearchResults] = useState<LibraryItem[] | null>();
  const [loading, setLoading] = useState(false);

  const searchData = useCallback(
    async (query: string, limit?: number, from?: number, deviceLang?: string) => {
      if (query != null) {
        setLoading(true);
        try {
          const data = await search(query, limit, from, deviceLang);
          if (data.length) {
            setSearchResults(data);
          } else {
            setSearchResults(null);
          }
          setLoading(false);
        } catch (error) {
          setSearchResults(null);
          setLoading(false);
        }
      }
    },
    [setSearchResults]
  );

  return {
    searchData,
    searchResults,
    loading,
  };
}
