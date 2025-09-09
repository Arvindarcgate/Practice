import User from "../models/User";
import Department from "../models/Department";
import Role from "../models/Role";

describe("User Model Unit Tests", () => {
  it("should have correct table name", () => {
    expect(User.tableName).toBe("users");
  });

  it("should have correct jsonSchema", () => {
    expect(User.jsonSchema.required).toContain("username");
    expect(User.jsonSchema.required).toContain("rollNo");
  });

  it("should define relationMappings correctly", () => {
    const relations = User.relationMappings;

    expect(relations.department.modelClass).toBe(Department);
    expect(relations.roles.modelClass).toBe(Role);
  });
});
