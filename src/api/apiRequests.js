import apiClient from "@api/apiService.js";
import {useInfiniteQuery} from "@tanstack/react-query";


export const searchImages = async ({ queryKey, pageParam = 1 }) => {
    const [_, query] = queryKey;
    if (!query) return { results: [], total_pages: 0, total_images: 0 };

    const response = await apiClient.get('/search/photos', {
        params: {
            query,
            page: pageParam,
            per_page: 30,
        },
    });


    return {
        results: response.data.results,
        nextPage: pageParam + 1,
        hasNextPage: pageParam < response.data.total_pages,
        total_images: response.data.total
    };
};



export const useImageSearch = (query) => {
    return useInfiniteQuery({
        queryKey: ['images', query],
        queryFn: searchImages,
        getNextPageParam: (lastPage) =>
            lastPage.hasNextPage ? lastPage.nextPage : undefined,
        enabled: Boolean(query),
    });
};