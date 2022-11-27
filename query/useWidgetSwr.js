import useSWR from 'swr';
import { getDataCharacters } from '../api';
import { URL_CHARACTER } from '../api/urls';

const fetcher = (url) => getDataCharacters(url);
export const useWidgetSwr = (params) => {
    const { data, error } = useSWR([`${URL_CHARACTER}${params}`], fetcher);

    return {
        data: data?.data,
        isLoading: !error && !data,
        isError: error,
    };
};
