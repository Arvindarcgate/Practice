import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable("users");
  if (!exists) {
    await knex.schema.createTable("users", (table) => {
      table.increments("id").primary(); // auto-increment PK
      table.string("username", 100).notNullable();
      table.string("rollNo").notNullable();
      table.string("course");
      table
        .integer("departmentId")
        .unsigned()
        .references("id")
        .inTable("departments")
        .onDelete("CASCADE"); // if dept deleted, delete users too
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}
