import { Model } from "objection";

export class FormEntry extends Model {
  id!: number;
  name!: string;
  age!: number;

  static tableName = "form_entries"; // MySQL table name
}
