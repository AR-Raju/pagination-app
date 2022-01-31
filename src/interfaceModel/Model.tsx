export interface Column {
  id: "title" | "url" | "created_at" | "author";
  label: string;
  minWidth?: number;
  align?: "right";
}

export interface InitPost {
  title: string;
  url: string;
  created_at: Date;
  author: string;
}
