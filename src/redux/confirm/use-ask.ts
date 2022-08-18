import { useAppDispatch } from '../hooks';
import askConfirm from './ask-confirm';

function useAsk() {
  const dispatch = useAppDispatch();

  async function ask(title: string) {
    const res = await dispatch(askConfirm(title));
    return res.payload as boolean;
  }

  return ask;
}

export default useAsk;
