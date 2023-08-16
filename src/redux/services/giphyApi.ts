import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type ImageMedia = {
  width: number;
  height: number;
  url:string;
}

type ApiResponse<T> = {
  data: T
}

export interface GiphyType{
    id: string;
    type: string;
    url: string;
    title:string;
    images: {
      fixed_height: ImageMedia,
      original: ImageMedia
    }
}


//api_key=vibTGPqpujZQxED5ryiR5R5WHh94QBgT&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
const defaultParams = (params : {[k in string] : string | number}) => {
    const _default = {
      q : "",
      api_key : process.env.GIPHY_API_KEY,
      limit: 9,
      offset: 0,
      rating: 'g',
      lang: 'en',
      bundle: 'messaging_non_clips'
    }

    return { ..._default, ...params };
}

export const GiphyApi = createApi({
    reducerPath: 'GiphyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs/' }),
    tagTypes: ['SearchTerms'],
    endpoints: (builder) => ({
      getIronMan: builder.query<ApiResponse<GiphyType[]>, void>({
        query: () => ({
          url: `search`,
          params: defaultParams({q: 'Iron Man'}),
        }),
        
      }),
      searchTerm: builder.query<ApiResponse<GiphyType[]>, string>({ // duplicated endpoint in case need to use separate cache
        query: (terms) => ({
          url: `search`,
          params: defaultParams({q: terms}),
        }),
        providesTags: (result, error, params) => [{ type: 'SearchTerms', params }]
      })
    }),
  })

  export const { useGetIronManQuery } = GiphyApi