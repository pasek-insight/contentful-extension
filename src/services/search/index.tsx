import Axios from 'axios';
import { LibraryItem } from '../libraryItem';

const API_HOST = 'https://search.insighttimer-api.net';
const SearchWhitelist = ['LIBRARY_ITEMS', 'COURSES'];

interface SearchResponseItem {
  item_summary: {
    type: string;
    library_item_summary: LibraryItem;
  }
}

export const search = async (
  query: string,
  limit = 20,
  from = 0,
  deviceLang = 'en'
): Promise<LibraryItem[]> => {
  const response = await Axios.get(
    `${API_HOST}/api/v1/top?query=${query}&limit=${limit}&offset=${from}&device_lang=${deviceLang}&publishers_only_users=true`
  );
  const { data } = response;

  const result = data
    .filter((r: SearchResponseItem) => {
      return SearchWhitelist.includes(r.item_summary.type);
    })
    .map((r: SearchResponseItem) => {
      if (r.item_summary.library_item_summary != null)
        return r.item_summary.library_item_summary;

      return null;
    });

  return result;
};