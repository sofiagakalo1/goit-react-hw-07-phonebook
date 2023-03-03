export const getFilter = store => store.filter;

export const getFilteredContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
  return result;
};
