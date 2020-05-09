import { MARK_TODO, REMOVE_TODO, ADD_TODO } from '../constants';

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

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case ADD_TODO:
      // If there is no todo, start the id from 1,
      // otherwise increment by 1
      const lastId = state[state.length - 1]?.id || 1;

      return state.concat({
        id: lastId + 1,
        isCompleted: false,
        ...action.payload,
      });

    default:
      return state;
  }
};
