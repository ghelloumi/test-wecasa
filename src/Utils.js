import { v4 as uuidv4 } from 'uuid';

export const convertToEuro = (value) => `${(value / 100).toFixed(2).toLocaleString()} €`;

export const convertDurationInHours = (duration) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;

  return `${hours}h${minutes}`;
};

export const objectIsEmpty = (obj) => Object.keys(obj).length === 0;

export const getNewId = (prefix) => `${prefix}-${uuidv4()}`;
