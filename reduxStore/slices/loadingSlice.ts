import { createSlice } from '@reduxjs/toolkit'

interface LoadingState {
  loading: boolean
  open: boolean
}

const initialState: LoadingState = {
  loading: false,
  open: false
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: state => {
      state.loading = true
      state.open = true
    },
    hideLoading: state => {
      state.loading = false
    },
    hideOpen: state => {
      state.open = false
    }
  }
})

export const { showLoading, hideLoading, hideOpen } = loadingSlice.actions

export default loadingSlice.reducer
