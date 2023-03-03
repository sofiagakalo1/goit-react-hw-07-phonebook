import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6400e1123779a862624eada3.mockapi.io/api/contacts',
});

export const getAllContacts = async () => {
  const response = await contactsInstance.get('/');
  // console.log(response);
  return response.data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  // console.log(data);
  return result;
};

export const deleteContact = async id => {
  const { data: result } = await contactsInstance.delete(`/${id}`);
  // console.log(result);
  return result;
};
