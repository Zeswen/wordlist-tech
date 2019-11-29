import { Response } from 'express';
import { isString } from 'util';

export const jsonResponse = <T>(res: Response, status: number, data: T, error?: Error): void => {
  if (data && !error) {
    res.status(status).json({ OK: true, data, error: null });
  } else {
    res.status(status).json({ OK: false, data: null, error });
  }
};

export const parseSQLValue = (value: any): any => (isString(value) ? `'${value}'` : value);

export const parseSQLWhere = (values: any): string => {
  return Object.keys(values)
    .reduce((acc: string[], key: string) => {
      const value = values[key];
      if (value) {
        acc.push(`${key} = ${parseSQLValue(value)}`);
        return acc;
      }
      return acc;
    }, [])
    .join(' AND ');
};

export const parseSQLSet = (values: any): string => {
  return Object.keys(values)
    .reduce((acc: string[], key: string) => {
      const value = values[key];
      if (value) {
        acc.push(`${key} = ${parseSQLValue(value)}`);
        return acc;
      }
      return acc;
    }, [])
    .join(', ');
};

export const parseSQLValues = (values: any): string[] => {
  const parsedValues: string[] = [];
  const parsedKeys: string[] = Object.keys(values).reduce((acc: string[], key: string) => {
    const value = values[key];
    if (value) {
      acc.push(key);
      parsedValues.push(parseSQLValue(value));
      return acc;
    }
    return acc;
  }, []);

  return [parsedKeys.join(', '), parsedValues.join(', ')];
};
