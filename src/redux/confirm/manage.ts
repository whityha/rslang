import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks';
import onConfirm from './on-confirm';
import { confirmSlice, ConfirmState } from './slice';

function useConfirm() {
  const dispatch = useAppDispatch();

  const showConfirm = async (title: string) => {
    const res = await dispatch(onConfirm(title));
    return res.payload as boolean;
  };

  const confirm = () => dispatch(confirmSlice.actions.setConfirm());
  const decline = () => dispatch(confirmSlice.actions.setDecline());

  const title = useSelector((state: ConfirmState) => state.title);
  const visible = useSelector((state: ConfirmState) => state.visible);

  return {
    showConfirm,
    confirm,
    decline,
    title,
    visible,
  };
}

export default useConfirm;
