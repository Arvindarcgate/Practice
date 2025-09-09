import { Model, RelationMappings } from "objection";
import Department from "./Department";
import Role from "./Role";

export default class User extends Model {
  // 🔹 Table columns
  id!: number;
  name!: string;
  email!: string;
  password!: string;

  // Optional fields
  rollNo?: string;
  course?: string;
  departmentId?: number;

  // 🔹 Relations
  department?: Department;
  roles?: Role[];

  static tableName = "users";

  // 🔹 JSON schema validation
  static jsonSchema = {
    type: "object",
    required: ["name", "email", "password"], // ✅ only required for auth

    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 100 },
      email: { type: "string", format: "email" },
      password: { type: "string", minLength: 6 },

      // Optional
      rollNo: { type: "string" },
      course: { type: "string" },
      departmentId: { type: "integer" },
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
          from: "users_roles.userId",
          to: "users_roles.roleId",
        },
        to: "roles.id",
      },
    },
  };
}
