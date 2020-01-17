import React from 'react';
import './search-panel.css';

export const SearchPanel = (): JSX.Element => (
  <input
    type='text'
    className='form-control search-input'
    placeholder='type to search'
  />
);
