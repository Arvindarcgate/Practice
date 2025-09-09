import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Create roles table
  await knex.schema.createTable("roles", (table) => {
    table.increments("id").primary(); // Auto-increment PK
    table.string("name", 100).notNullable();
  });

  // Create users_roles join table
  await knex.schema.createTable("users_roles", (table) => {
    table.increments("id").primary();
    table
      .integer("userId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table
      .integer("roleId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("roles")
      .onDelete("CASCADE");

    // Ensure a user cannot have the same role twice
    table.unique(["userId", "roleId"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users_roles");
  await knex.schema.dropTableIfExists("roles");
}
