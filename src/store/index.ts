import { versionApi } from '@/api/version';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [versionApi.reducerPath]: versionApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(versionApi.middleware),
});

setupListeners(store.dispatch);
