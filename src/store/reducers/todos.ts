import { MARK_TODO } from '../constants';

const initialState: Todo[] = [
  {
    id: 1,
    title: 'aaa sss',
    description: 'Desc 1',
    date: new Date('2020 4 3 UTC').toISOString(),
    isCompleted: false,
  },
  {
    id: 2,
    title: 'qqq sss',
    description: 'Desc 2',
    date: new Date('2020 4 3 UTC').toISOString(),
    isCompleted: false,
  },
  {
    id: 3,
    title: 'www eee',
    description: 'Desc 3',
    date: new Date('2020 4 6 UTC').toISOString(),
    isCompleted: true,
  },
  {
    id: 4,
    title: 'rrr eee',
    description: 'Desc 4',
    date: new Date('2020 4 6 UTC').toISOString(),
    isCompleted: false,
  },
  {
    id: 5,
    title: 'ttt eee',
    description: 'Desc 5',
    date: new Date('2020 4 6 UTC').toISOString(),
    isCompleted: true,
  },
  {
    id: 6,
    title: 'test',
    description: 'Desc 6',
    date: new Date('2020 4 10 UTC').toISOString(),
    isCompleted: false,
  },
];

export const todosReducer = (state = initialState, action: TodoAction<any>) => {
  switch (action.type) {
    case MARK_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: true,
          };
        }

        return todo;
      });

    default:
      return state;
  }
};
