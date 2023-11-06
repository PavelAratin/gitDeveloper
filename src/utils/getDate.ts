export const getDate = (date: string | undefined): string => {
  const localDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
  if (date) {
    const joinedDate = localDate.format(new Date(date))
    return joinedDate
  } else {
  }
  return 'Сведения о дате не получены'
}