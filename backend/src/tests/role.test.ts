import Department from "../models/Department";
import User from "../models/User";

describe("Department Model Unit Tests", () => {
  it("should have correct table name", () => {
    expect(Department.tableName).toBe("departments");
  });

  it("should have correct jsonSchema", () => {
    expect(Department.jsonSchema.required).toContain("name");
  });

  it("should define relationMappings correctly", () => {
    const relations = Department.relationMappings;

    expect(relations.users.modelClass).toBe(User);
  });
});
