import React, { useState } from 'react';
import './CreateCard.css';

interface createForm {
  image: string;
  es_name: string;
  es_description: string;
  es_audio: string;
  en_name: string;
  en_description: string;
  en_audio: string;
}

const CreateCard: React.FC<{ createCard: Function }> = ({ createCard }) => {
  const [form, setForm] = useState<createForm>({
    image: '',
    es_name: '',
    es_description: '',
    es_audio: '',
    en_name: '',
    en_description: '',
    en_audio: '',
  });
  const createCardFunc = (e: any) => {
    e.preventDefault();
    createCard(form);
  };
  const updateForm = (field: string) => {
    return (e: any) => {
      const newForm: any = { ...form };
      newForm[field] = e.target.value;
      setForm(newForm);
    };
  };
  return (
    <div className="create-card">
      <h1>Create Word</h1>
      <form className="create-form" onSubmit={createCardFunc}>
        <input required type="text" placeholder="Image URL" onChange={updateForm('image')} />
        <input required type="text" placeholder="Spanish Name" onChange={updateForm('es_name')} />
        <textarea required placeholder="Spanish Description" onChange={updateForm('es_description')} />
        <input type="text" placeholder="Spanish Audio" onChange={updateForm('es_audio')} />
        <input required type="text" placeholder="English Name" onChange={updateForm('en_name')} />
        <textarea required placeholder="English Description" onChange={updateForm('en_description')} />
        <input type="text" placeholder="English Audio" onChange={updateForm('en_audio')} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCard;
