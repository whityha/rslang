import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastState } from '../../types/redux';

const initialState: ToastState = {
  visible: false,
  message: '',
  color: 'error',
};

export const toastSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toastClear(state: ToastState) {
      state.visible = false;
      state.message = '';
    },
    toastError(state: ToastState, action: PayloadAction<string>) {
      state.visible = true;
      state.message = action.payload;
      state.color = 'error';
    },
    toastInfo(state: ToastState, action: PayloadAction<string>) {
      state.visible = true;
      state.message = action.payload;
      state.color = 'info';
    },
    toastWarning(state: ToastState, action: PayloadAction<string>) {
      state.visible = true;
      state.message = action.payload;
      state.color = 'warning';
    },
    toastSuccess(state: ToastState, action: PayloadAction<string>) {
      state.visible = true;
      state.message = action.payload;
      state.color = 'success';
    },
  },
});

export const {
  toastClear, toastSuccess, toastWarning, toastInfo, toastError,
} = toastSlice.actions;

export default toastSlice.reducer;
