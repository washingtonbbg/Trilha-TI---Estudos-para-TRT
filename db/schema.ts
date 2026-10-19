import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const progress = sqliteTable("progress", {
  userId: text("user_id").primaryKey(),
  data: text("data").notNull(),
  updatedAt: integer("updated_at").notNull(),
});
