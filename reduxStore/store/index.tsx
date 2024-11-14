// src/redux/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loadingReducer from 'reduxStore/slices/loadingSlice'
import { RootState } from 'reduxStore/types/store'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  loading: loadingReducer
})
type PersistedReducer = ReturnType<typeof persistReducer<RootState>>

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
) as PersistedReducer

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
