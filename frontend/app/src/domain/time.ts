import dayjs from 'dayjs'

export const currentTime = (): string => {
  const now = dayjs()
  return now.format('YYYY-MM-DDThh:mm')
}
