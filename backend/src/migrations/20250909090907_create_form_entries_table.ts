import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("form_entries", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("age").notNullable();
    table.timestamps(true, true); // created_at, updated_at
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("form_entries");
}
