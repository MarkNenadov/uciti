export function pickRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = array.slice();
  let currentIndex = shuffled.length;
  const result: T[] = [];

  while (count > 0 && currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
    result.push(shuffled[currentIndex]);
    count--;
  }

  return result;
}
