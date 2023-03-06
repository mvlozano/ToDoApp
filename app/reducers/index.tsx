import { getId } from '@/utils';

export type StateType = {
  tasks: { id: number; value: string }[];
  input: string;
};

export function tasksListReducer(state: StateType, action: any): StateType {
  switch (action.type) {
    case 'added': {
      return { ...state, input: '', tasks: [...state.tasks, { id: getId(), value: state.input }] };
    }
    case 'edited': {
      const newTasksList = state.tasks.slice();
      newTasksList[action.id].value = action.value;
      return { ...state, tasks: newTasksList };
    }
    case 'deleted': {
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.id) };
    }
    case 'input': {
      return { ...state, ...action };
    }
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
}
