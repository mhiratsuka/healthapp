import dayjs from 'dayjs'

export const currentTime = (): string => {
  const now = dayjs()
  return now.format('YYYY-MM-DDTHH:mm')
}

export const formatTime = (time: string): string => {
  return dayjs(time).format('YYYY-MM-DD HH:mm')
}

export const birthdayFormat = (time: string): string => {
  return dayjs(time).format('YYYY/MM/DD')
}

export const birthdayFormFormat = (time: string): string => {
  return dayjs(time).format('YYYY-MM-DD')
}
