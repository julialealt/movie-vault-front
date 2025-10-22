export const generateStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => ({
    filled: index < rating,
  }))
}
