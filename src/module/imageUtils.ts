export const imageUrl = (image: string): any => {
  return new URL(`../assets/img/${image}`, import.meta.url).toString()
}