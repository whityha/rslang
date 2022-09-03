import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConfirmProps {
  title: string;
}

export interface ConfirmState extends ConfirmProps {
  visible: boolean;
  isConfirmed: boolean,
  isDeclined: boolean
}

const initialState: ConfirmState = {
  visible: false,
  title: '',
  isConfirmed: false,
  isDeclined: false,
};

export const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    prepareConfirm(state: ConfirmState, action: PayloadAction<string>) {
      state.title = action.payload;
      state.isDeclined = false;
      state.isConfirmed = false;
      state.visible = true;
    },
    closeConfirm(state: ConfirmState) {
      state.visible = false;
    },
    setConfirm: (state) => {
      state.isConfirmed = true;
      state.visible = false;
    },
    setDecline: (state) => {
      state.isDeclined = true;
      state.visible = false;
    },
  },
});

export const {
  prepareConfirm,
  closeConfirm,
  setConfirm, setDecline,
} = confirmSlice.actions;

export default confirmSlice.reducer;
