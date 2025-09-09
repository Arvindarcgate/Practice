import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users", (table) => {
    table.string("email", 255).notNullable().unique();
    table.string("password", 255).notNullable();
    // ❌ REMOVE table.string("name", 100);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users", (table) => {
    table.dropColumn("email");
    table.dropColumn("password");
    // ❌ REMOVE table.dropColumn("name");
  });
}
