export const formattedDateString = date => {
  const dueDate = new Date(date)
  const month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ][dueDate.getMonth()]

  return `${month} ${dueDate.getDate()}, ${dueDate.getFullYear()}`
}
