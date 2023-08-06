class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
}

const pt = new Point();
pt.x = 5;
pt.y = 0;

console.log(pt);

function shuffle<T>(array: T[]): T[] {
  const shuffled = array.slice();  // Create a copy of the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at i and j
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Usage:
const original = [1, 2, 3, 4, 5];
const randomized = shuffle(original);

console.log(original);       // [1, 2, 3, 4, 5]
console.log(randomized);     // e.g., [3, 1, 5, 2, 4] (order will vary)
