"use client";
import React from 'react';
 import Select, { components } from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #d3a27f',
    borderRadius: '10px',
    boxShadow: state.isFocused ? '0 0 0 1px #d3a27f' : 'none',
    '&:hover': {
      borderColor: 'brown',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: 'all .3s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(0)' : 'rotate(-180deg)',
    color: 'brown',
    cursor: 'pointer',
  }),
  menu: (provided) => ({
    ...provided,
    border: '1px solid #d3a27f',
    background: 'white',
    borderRadius: '10px',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? '#d3a27f' : 'white',
    '&:hover': {
      backgroundColor: '#d3a27f',
      color: 'white',
      cursor: 'pointer',
    },
    '&:focus': {
      backgroundColor: '#d3a27f',
      color: 'white',
    },
  }),
  menuList: (provided) => ({
    ...provided,
    '&::-webkit-scrollbar': {
      display: 'none', // Скрываем столбик прокрутки для WebKit (Chrome, Safari)
    },
    scrollbarWidth: 'none', // Скрываем столбик прокрутки для Firefox
  }),
};

const ClearIndicator = (props) => {
  const { value } = props.selectProps;
  // Убираем крестик, если выбрана опция "Перехід до розділів блюд..."
  if (value && value.value === null) {
    return null;
  }
  return <components.ClearIndicator {...props} />;
};

const MySelectComponent = (props) => {
  return (
    <Select
      {...props}
      styles={customStyles}
      components={{ ClearIndicator }}
      placeholder={props.placeholder}
    />
  );
};

export default MySelectComponent;

