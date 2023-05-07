import axios from 'axios';

const PROJECT_TOKEN = `6452c9f3a2860c9ed41522df`;

axios.defaults.baseURL = `https://${PROJECT_TOKEN}.mockapi.io/api/v1/`;

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(`contacts`, contact);

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
};
