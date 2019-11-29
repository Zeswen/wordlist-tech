import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import HttpClient from './utils/HttpClient';
import { Language } from './utils/index';
import { Word, WordModel } from './models/Word';
import List from './components/List';

const App: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [language, setLanguage] = useState<Language>('es');
  const createCard = async (values: WordModel) => {
    await HttpClient.postWord(values);
    const newWords = [...words];
    const wordId = words.length;
    const newWord: WordModel = { id: wordId, ...values };
    newWords.push(parseWord(newWord));
    setWords(newWords);
  };
  const deleteCard = async (id: number): Promise<void> => {
    await HttpClient.deleteWord(`${id}`);
    const wordIndex = words.findIndex(iWord => iWord.id === id);
    const newWords = [...words];
    newWords.splice(wordIndex, 1);
    setWords(newWords);
  };
  const parseWord = (word: WordModel): Word => {
    if (language === 'es') {
      return {
        id: word.id,
        image: word.image,
        name: word.es_name,
        description: word.es_description,
        audio: word.es_audio,
      };
    } else {
      return {
        id: word.id,
        image: word.image,
        name: word.en_name,
        description: word.en_description,
        audio: word.en_audio,
      };
    }
  };
  useEffect(() => {
    const setLanguageWords = (fetchedWords: WordModel[]) => {
      const newWords = fetchedWords.map(fetchedWord => {
        return parseWord(fetchedWord);
      });

      setWords(newWords);
    };
    HttpClient.getWords().then(words => setLanguageWords(words));
  }, [language]);
  return (
    <div className="App">
      <Header setLanguage={setLanguage} />
      <List createCard={createCard} deleteCard={deleteCard} words={words} />
    </div>
  );
};

export default App;
