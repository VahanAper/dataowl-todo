const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatMonthName = (year: number, month: number) => {
  // month index is 1 based
  const monthName = monthNames[month - 1];

  return `${monthName} ${year}`;
};

export const getDaysArray = (year: number, month: number) => {
  const daysCount = new Date(year, month, 0).getDate();

  return new Array(daysCount).fill(null).reduce((acc, _, i) => {
    const day = new Date(`${year} ${month} ${i + 1} UTC`).toISOString();

    return acc.concat(day);
  }, []);
};

export const generateTotalMessage = (todos: Todo[]) => {
  const todosCount = todos.length;
  const completedTodosCount = todos.filter(todo => !todo.isCompleted).length;

  return `${todosCount} todo items (${completedTodosCount} of which incomplete)`
}
