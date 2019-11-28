import { Response } from 'express';
import { SEED } from '../src/data/index';
import { WordES, WordEN, WordImg } from '../src/models';

export const jsonResponse = <T>(res: Response, status: number, data: T, error?: Error): void => {
  if (data && !error) {
    res.status(status).json({ OK: true, data, error: null });
  } else {
    res.status(status).json({ OK: false, data: null, error });
  }
};

export const parseSQLValues = (values: any): string[] => {
  const parsedValues: string[] = [];
  const parsedKeys: string[] = Object.keys(values).reduce((acc: string[], key: string) => {
    const value = values[key];
    acc.push(key);
    if (value) {
      parsedValues.push(`'${value}'`);
      return acc;
    }
    return acc;
  }, []);

  return [parsedKeys.join(', '), parsedValues.join(', ')];
};

export const normalizedSeed = () => {
  const newSeed: {
    es: object[];
    en: object[];
    img: object[];
  } = {
    es: [],
    en: [],
    img: [],
  };
  SEED.forEach(value => {
    const { es, en, image } = value;
    newSeed.es.push(es);
    newSeed.en.push(en);
    newSeed.img.push({ url: image });
  });

  return newSeed;
};
