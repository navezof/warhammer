const fateTable = [
  [
    // Certain
    { low: 10, mid: 50, high: 91 },
    { low: 13, mid: 65, high: 94 },
    { low: 15, mid: 75, high: 96 },
    { low: 17, mid: 85, high: 98 },
    { low: 18, mid: 90, high: 99 },
    { low: 19, mid: 95, high: 100 },
    { low: 20, mid: 99, high: 100 },
    { low: 20, mid: 99, high: 100 },
    { low: 20, mid: 99, high: 100 },
  ],
  [
    // Nearly Certain
    { low: 7, mid: 35, high: 88 },
    { low: 10, mid: 50, high: 91 },
    { low: 13, mid: 65, high: 94 },
    { low: 15, mid: 75, high: 96 },
    { low: 17, mid: 85, high: 98 },
    { low: 18, mid: 90, high: 99 },
    { low: 19, mid: 95, high: 100 },
    { low: 20, mid: 99, high: 100 },
    { low: 20, mid: 99, high: 100 },
  ],
  [
    // Very Likely
    { low: 5, mid: 25, high: 84 },
    { low: 7, mid: 35, high: 86 },
    { low: 10, mid: 50, high: 88 },
    { low: 13, mid: 65, high: 91 },
    { low: 15, mid: 75, high: 94 },
    { low: 17, mid: 85, high: 96 },
    { low: 18, mid: 90, high: 98 },
    { low: 19, mid: 95, high: 99 },
    { low: 20, mid: 99, high: 100 },
  ],
  [
    // Likely
    { low: 3, mid: 15, high: 84 },
    { low: 5, mid: 25, high: 86 },
    { low: 7, mid: 35, high: 88 },
    { low: 10, mid: 50, high: 91 },
    { low: 13, mid: 65, high: 94 },
    { low: 15, mid: 75, high: 96 },
    { low: 17, mid: 85, high: 98 },
    { low: 18, mid: 90, high: 99 },
    { low: 19, mid: 95, high: 100 },
  ],
  [
    // 50/50
    { low: 2, mid: 10, high: 83 },
    { low: 3, mid: 15, high: 84 },
    { low: 5, mid: 25, high: 85 },
    { low: 7, mid: 35, high: 86 },
    { low: 10, mid: 50, high: 87 },
    { low: 13, mid: 65, high: 88 },
    { low: 15, mid: 75, high: 89 },
    { low: 17, mid: 85, high: 90 },
    { low: 18, mid: 90, high: 91 },
  ],
  [
    // Unlikely
    { low: 1, mid: 5, high: 82 },
    { low: 2, mid: 10, high: 83 },
    { low: 3, mid: 15, high: 84 },
    { low: 5, mid: 25, high: 86 },
    { low: 7, mid: 35, high: 88 },
    { low: 10, mid: 50, high: 91 },
    { low: 13, mid: 65, high: 94 },
    { low: 15, mid: 75, high: 96 },
    { low: 17, mid: 85, high: 98 },
  ],
  [
    // Very Unlikely
    { low: 0, mid: 1, high: 81 },
    { low: 1, mid: 5, high: 82 },
    { low: 2, mid: 10, high: 83 },
    { low: 3, mid: 15, high: 84 },
    { low: 5, mid: 25, high: 86 },
    { low: 7, mid: 35, high: 88 },
    { low: 10, mid: 50, high: 91 },
    { low: 13, mid: 65, high: 94 },
    { low: 15, mid: 75, high: 96 },
  ],
  [
    // Nearly Impossible
    { low: 0, mid: 1, high: 81 },
    { low: 0, mid: 1, high: 81 },
    { low: 1, mid: 5, high: 82 },
    { low: 2, mid: 10, high: 83 },
    { low: 3, mid: 15, high: 84 },
    { low: 5, mid: 25, high: 86 },
    { low: 7, mid: 35, high: 88 },
    { low: 10, mid: 50, high: 91 },
    { low: 13, mid: 65, high: 94 },
  ],
  [
    // Impossible
    { low: 0, mid: 1, high: 81 },
    { low: 0, mid: 1, high: 81 },
    { low: 0, mid: 1, high: 81 },
    { low: 1, mid: 5, high: 82 },
    { low: 2, mid: 10, high: 83 },
    { low: 3, mid: 15, high: 84 },
    { low: 5, mid: 25, high: 86 },
    { low: 7, mid: 35, high: 88 },
    { low: 10, mid: 50, high: 91 },
  ],
];

export default fateTable;
