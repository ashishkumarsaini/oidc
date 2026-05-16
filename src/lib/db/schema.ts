import { varchar, pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  full_name: varchar("full_name", { length: 100 }),
  email: varchar("email", { length: 322 }).notNull(),

  password: varchar("password", { length: 66 }),
  salt: text("salt"),

  redirect_uri: varchar("redirect_uri", { length: 2000 }).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});