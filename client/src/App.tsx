import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import HttpClient from './utils/HttpClient';
import { Language } from './utils/index';
import Word from './models/Word';

import Card from './components/Card';

const mockWord: Word = {
  id: 1,
  name: 'dog',
  description: 'animal',
  image: 'https://bit.ly/2L2eygL',
  audio: 'https://wl1media.s3.amazonaws.com/v_20190807/audios/pairs/114026',
};

const App: React.FC = () => {
  const [words, setWords] = useState<Word[]>([mockWord]);
  const [language, setLanguage] = useState<Language>('es');
  useEffect(() => {
    HttpClient.getWords().then(words => setWords(words));
  }, [language]);
  return (
    <div className="App">
      <Header setLanguage={setLanguage} />
      {words.map(({ id, name, description, image, audio }) => (
        <Card key={id} id={id} name={name} description={description} image={image} audio={audio} />
      ))}
    </div>
  );
};

export default App;
