import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("departments", (table) => {
    table.increments("id").primary();
    table.string("name", 100).notNullable();
  });

  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name", 100).notNullable();
    table
      .integer("departmentId")
      .unsigned() // good practice for foreign keys
      .references("id")
      .inTable("departments")
      .onDelete("CASCADE"); // optional: delete users if department is deleted
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("departments");
}
