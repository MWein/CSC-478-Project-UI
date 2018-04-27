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

export const totalCost = date => {
  const today = new Date()
  const dueDate = new Date(date)

  dueDate.setHours(23, 59, 59)

  const timeDiff = today.getTime() - dueDate.getTime()
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

  return diffDays > 0 ? 3 + diffDays * 3 : 3
}
