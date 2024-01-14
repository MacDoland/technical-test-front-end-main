import type { ReactNode } from "react";

interface DataItem {
  id: number;
  name: string | undefined;
}

interface TableItem {
  id: number;
  display: string | undefined | ReactNode;
}

export type { TableItem, DataItem };
