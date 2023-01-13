export const useLayout = (): { year: number } => {
  const currentYear: number = new Date().getFullYear()
  return {
    year: currentYear,
  }
}
