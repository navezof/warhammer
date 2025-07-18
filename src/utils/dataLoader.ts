import { Table } from "../types/type";

export interface TableRepository {
  get: (tableName: string) => Table | undefined;
  getAll: () => Table[];
}

function createTableRepository(): TableRepository {
  const modules = import.meta.glob("../data/*.json", { eager: true });
  const data: Record<string, Table> = {};

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

  return {
    get: (name: string) => data[name],
    getAll: () => Object.values(data),
  };
}

export const tableRepository = createTableRepository();
