
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "skill_barter",

  waitForConnections: true,
  connectionLimit: 10,
  enableKeepAlive: true,

  // Enable TLS when using TiDB Cloud
  ssl:
    process.env.DB_SSL === "true"
      ? { minVersion: "TLSv1.2" }
      : undefined
});
