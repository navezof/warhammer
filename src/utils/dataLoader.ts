import { Table } from "../types/type";

// TODO NEXT: A remplacer par un fetch de data
const modules = import.meta.glob("../data/*.json", { eager: true });

export const DataLoader = () => {
  const data: { [key: string]: Table } = {};

  // Go through the folder indicated in parameter and create an array of Table object using the json found in the folder
  // to gain performance, only the name is being registered
  function loadData(): void {
    try {
      for (const path in modules) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const module: any = modules[path];
        const table = (module.default || module) as Table;
        data[table.name] = table;
      }
    } catch (error) {
      console.error(`Error loading data from import.meta.glob:`, error);
    }
  }

  // Used by other component, go through the array of Table loaded and return the table with the requested name
  function get(tableName: string): Table | undefined {
    return data[tableName];
  }

  // Return an array of all the table registered
  function getAll(): Table[] {
    return Object.values(data);
  }

  return {
    loadData,
    get,
    getAll,
  };
};
