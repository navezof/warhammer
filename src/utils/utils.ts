export const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function convertCSVArrayToArray(csvArray: string[]): string[][] {
  const newArray = [];
  for (let i = 0; i < csvArray.length; i += 1) {
    const row = csvArray[i];
    const columns = row.split(";");
    newArray.push(columns);
  }
  return newArray;
}
