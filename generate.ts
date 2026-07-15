interface Result {
  id: number;
  athlete: string;
  time: number; // milliseconds
  category: 0 | 1 | 2;
}

const names = [
  "Alex", "Ben", "Callum", "Chris", "Dan", "David", "Elliot", "Emma",
  "Ethan", "Finn", "George", "Grace", "Hannah", "Harry", "Holly",
  "Isla", "Jack", "Jake", "James", "Jamie", "Jess", "Joe", "Josh",
  "Katie", "Leo", "Lewis", "Liam", "Lily", "Luke", "Mason", "Megan",
  "Mia", "Nathan", "Noah", "Olivia", "Oscar", "Owen", "Poppy", "Ryan",
  "Sam", "Sophie", "Thomas", "Toby", "Will", "Zoe"
];

function randomTime(): number {
  const centre = 120000; // 2:00
  const spread = (Math.random() - 0.5) * 40000; // ±20s
  return Math.round(centre + spread);
}

export const data: Result[] = Array.from({ length: 200 }, (_, id) => ({
  id,
  athlete: names[Math.floor(Math.random() * names.length)],
  time: randomTime(),
  category: Math.floor(Math.random() * 3) as 0 | 1 | 2,
}));

console.log(JSON.stringify(data, null, 2));