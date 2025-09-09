import { Model } from "objection";
import User from "./User";

export default class Department extends Model {
  static tableName = "departments";

  // 🔹 Validation rules
  static jsonSchema = {
    type: "object",
    required: ["name"],

    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 100 },
    },
  };

  // 🔹 Relation mapping
  static relationMappings = {
    users: {
      relation: Model.HasManyRelation,
      modelClass: User,
      join: {
        from: "departments.id", // ⚠️ should be plural "departments.id"
        to: "users.departmentId",
      },
    },
  };
}
