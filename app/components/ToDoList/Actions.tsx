import { Box, DeleteIco, EditIco, IconButton, Tooltip } from '@ui/index';
import { useDispatch } from '@/hooks/useDispatch';
import { useCallback } from 'react';

type ActionsProps = {
  id: number;
};
export function Actions({ id }: ActionsProps) {
  console.log('Actions');
  const dispatch = useDispatch();
  const onClickDelete = useCallback(() => {
    dispatch({ type: 'deleted', id });
  }, []);

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Tooltip title="Edit">
        <IconButton /*onClick={editBtnHandler}*/>
          <EditIco />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={onClickDelete}>
          <DeleteIco />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
