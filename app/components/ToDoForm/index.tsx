import { Input } from './Input';
import { Btn } from './Btn';
import { Box } from '@ui/index';

export function ToDoForm() {
  console.log('ToDoForm');
  return (
    <Box display="flex" alignItems="center" justifyContent="space-evenly" flexWrap="wrap" py="2rem">
      <Input />
      <Btn />
    </Box>
  );
}
