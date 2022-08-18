import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useWords = () => useAppSelector((state) => state.words);
export const useAuth = () => useAppSelector((state) => state.auth);
export const useToast = () => useAppSelector((state) => state.toast);
