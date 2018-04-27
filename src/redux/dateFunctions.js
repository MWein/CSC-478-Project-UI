export const formattedDateString = date => {
  const dueDate = new Date(date)
  const month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ][dueDate.getMonth()]

  return `${month} ${dueDate.getDate()}, ${dueDate.getFullYear()}`
}

export const isOverdue = date => {
  const today = new Date()
  const dueDate = new Date(date)

  dueDate.setHours(23, 59, 59)

  return today > dueDate
}
