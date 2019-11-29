import dotenv from 'dotenv';
import { Pool, QueryResult } from 'pg';
import { parseSQLValues, parseSQLSet, parseSQLWhere } from '../utils';

dotenv.config();

export class PGBaseModel {
  static table: string;
  protected static pool: Pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
  });

  static async find<T extends PGBaseModel>(): Promise<T[] | void> {
    return new Promise((resolve, reject) => {
      this.pool.query(`SELECT * FROM ${this.table}`, (error: Error, results: QueryResult | void) => {
        if (error) {
          reject(error);
        }
        if (results) {
          resolve(results.rows as T[]);
        }
        resolve();
      });
    });
  }

  static async findOne<T extends PGBaseModel>(where: object): Promise<T | void> {
    return new Promise((resolve, reject) => {
      this.pool.query(
        `SELECT * FROM ${this.table} WHERE ${parseSQLWhere(where)}`,
        (error: Error, results: QueryResult | void) => {
          if (error) {
            reject(error);
          }
          if (results) {
            resolve(results.rows[0] as T);
          }
          resolve();
        },
      );
    });
  }

  static async create(values: object): Promise<void> {
    return new Promise((resolve, reject) => {
      const [parsedKeys, parsedValues] = parseSQLValues(values);
      this.pool.query(`INSERT INTO ${this.table} (${parsedKeys}) VALUES (${parsedValues})`, (error: Error) => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });
  }

  static async update(id: string, values: object): Promise<void> {
    return new Promise((resolve, reject) => {
      this.pool.query(`UPDATE ${this.table}  SET ${parseSQLSet(values)} WHERE ID = ${id}`, (error: Error) => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });
  }

  static async delete(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.pool.query(`DELETE FROM ${this.table} WHERE ID = ${id}`, (error: Error) => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });
  }
}
