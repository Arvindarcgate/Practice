import { Model, RelationMappings } from "objection";
import Department from "./Department";
import Role from "./Role"; // ✅ Import Role

export default class User extends Model {
  // 🔹 Table columns
  id!: number;
  username!: string;
  rollNo!: string;
  course?: string;
  departmentId?: number;

  name?: string;
  email?: string;
  password?: string;

  // 🔹 Relations
  department?: Department;
  roles?: Role[];

  static tableName = "users";

  // 🔹 JSON schema validation
  static jsonSchema = {
    type: "object",
    required: ["username", "rollNo"],

    properties: {
      id: { type: "integer" },
      username: { type: "string", minLength: 1, maxLength: 100 },
      rollNo: { type: "string" },
      course: { type: "string" },
      departmentId: { type: "integer" },
      name: { type: "string" },
      email: { type: "string", format: "email" },
      password: { type: "string", format: "password" },
    },
  };

  // 🔹 Relation mappings
  static relationMappings: RelationMappings = {
    department: {
      relation: Model.BelongsToOneRelation,
      modelClass: Department,
      join: {
        from: "users.departmentId",
        to: "departments.id",
      },
    },
    roles: {
      relation: Model.ManyToManyRelation,
      modelClass: Role,
      join: {
        from: "users.id",
        through: {
          from: "users_roles.userId", // join table
          to: "users_roles.roleId",
        },
        to: "roles.id",
      },
    },
  };
}
