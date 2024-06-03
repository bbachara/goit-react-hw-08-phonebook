import axios from 'axios';

const BASE_URL = 'https://664e4445fafad45dfadf99c4.mockapi.io';

export const fetchContactsApi = () => axios.get(`${BASE_URL}/contacts`);

export const addContactApi = contact =>
  axios.post(`${BASE_URL}/contacts`, contact);

export const deleteContactApi = contactId =>
  axios.delete(`${BASE_URL}/contacts/${contactId}`);
