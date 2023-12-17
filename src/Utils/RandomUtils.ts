export function pickRandomItems<T>(array: T[], count: number): T[] {
  if (count <= 0) {
    throw new Error("Count must be greater than 0");
  }
  if (count > array.length) {
    throw new Error("Count must not exceed the length of the array");
  }

  return shuffleArray(array.slice()).slice(0, count);
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }

  return shuffledArray;
}


