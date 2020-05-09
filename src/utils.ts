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
