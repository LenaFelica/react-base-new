export const createTabOptions = (tabs) => {
  return tabs.map(({ name, title }) => ({
    value: name,
    label: title,
  }));
};
