export interface WordModel {
  id?: number;
  image: string;
  es_name: string;
  es_description: string;
  es_audio?: string;
  en_name: string;
  en_description: string;
  en_audio?: string;
}

export interface Word {
  id?: number;
  image: string;
  name: string;
  description: string;
  audio?: string;
  deleteCard?: Function;
}
