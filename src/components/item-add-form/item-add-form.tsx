import React, { useState } from 'react';

import './item-add-form.css';

export interface ItemAddFormProps {
  onItemAdded(arg0: string): void;
}

export const ItemAddForm = (props: ItemAddFormProps): JSX.Element => {
  const { onItemAdded } = props;
  const [label, setLabel] = useState('');

  const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLabel(e.target.value);
  };

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onItemAdded(label);
    setLabel('');
  };
  return (
    <form className='item-add-form d-flex' onSubmit={onSubmit}>
      <input
        type='text'
        className='form-control'
        onChange={onLabelChange}
        placeholder='What needs to be done'
        value={label}
      />
      <button className='btn btn-outline-secondary'>Add</button>
    </form>
  );
};
