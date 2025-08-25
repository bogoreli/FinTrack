import { relations } from "drizzle-orm";
import { uuid } from "drizzle-orm/gel-core";
import {
  date,
  integer,
  pgEnum,
  pgTable,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const transactionType = pgEnum("transaction_type", [
  "income",
  "expense",
]);

export const categoryTable = pgTable("categories", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
});

export const transactionsTable = pgTable("transactions", {
  id: uuid("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  type: transactionType("type").notNull(),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => categoryTable.id),
  description: text("description"),
  amount: integer().notNull(),
  createdAt: date("created_at").notNull().defaultNow(),
});

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 150 }).notNull(),
  password: text("password").notNull(),
});

export const categoryRelations = relations(categoryTable, (params) => {
  return {
    categories: params.many(transactionsTable),
  };
});

export const transactionRelations = relations(transactionsTable, (params) => ({
  user: params.one(users, {
    fields: [transactionsTable.userId],
    references: [users.id],
  }),
  category: params.one(categoryTable, {
    fields: [transactionsTable.categoryId],
    references: [categoryTable.id],
  }),
}));
