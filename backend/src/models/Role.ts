import { Model } from "objection";
import User from "./User";

export default class Role extends Model {
  // 🔹 Table columns
  id!: number;
  name!: string;

  // 🔹 Relations
  users?: User[];

  static tableName = "roles";

  // 🔹 Validation rules
  static jsonSchema = {
    type: "object",
    required: ["name"],

    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 100 },
    },
  };

  // 🔹 Relation mapping (many-to-many with users)
  static relationMappings = {
    users: {
      relation: Model.ManyToManyRelation,
      modelClass: User,
      join: {
        from: "roles.id",
        through: {
          from: "users_roles.roleId",
          to: "users_roles.userId",
        },
        to: "users.id",
      },
    },
  };
}
