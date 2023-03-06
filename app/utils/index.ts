import { StateType } from '@/reducers';

export const initialTasks: StateType['tasks'] = 'Something,'
  .repeat(10)
  .split(',', 10)
  .map((element, index) => ({ id: index, value: element + ` ${index}` }));

export function getId() {
  return Number(new Date());
}
