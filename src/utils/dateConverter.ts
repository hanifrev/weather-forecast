export function dateConverter(fxDate: string): string {
  const date = new Date(fxDate)
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}

export function formatDate(fxDate: string): string {
  const date = new Date(fxDate)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  return `${day}/${month}`
}
