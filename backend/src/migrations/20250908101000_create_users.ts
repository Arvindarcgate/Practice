import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable("users");
  if (!exists) {
    await knex.schema.createTable("users", (table) => {
      table.increments("id").primary(); // auto-increment PK

      // existing fields
      table.string("username", 100).notNullable();
      table.string("rollNo").notNullable();
      table.string("course");
      table
        .integer("departmentId")
        .unsigned()
        .references("id")
        .inTable("departments")
        .onDelete("CASCADE");

      // 🔹 Required for auth
      table.string("name");
      table.string("email").notNullable().unique();
      table.string("password").notNullable();

      // optional: timestamps
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}
