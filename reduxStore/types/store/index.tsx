import loadingReducer from 'reduxStore/slices/loadingSlice'

export interface RootState {
  loading: ReturnType<typeof loadingReducer>
}
