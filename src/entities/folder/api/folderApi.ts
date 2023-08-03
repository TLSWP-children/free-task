import { baseApi } from '@/shared/api';

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    popularProducts: build.query<object[], void>({
      query: () => ({
        url: `/folders/`,
      }),
    }),
    productDetails: build.query<object, number>({
      query: (productId) => ({
        url: `/folders/${productId}`,
      }),
    }),
  }),
});

export const { usePopularProductsQuery, useProductDetailsQuery } = productApi;
