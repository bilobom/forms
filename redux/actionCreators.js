export const updateInput = (sector, section, entry, id, value) => {
  return {
    type: "input",
    payload: { sector, section, entry, id, value }
  };
};
export const toggleCheckBox = (sector, section, entry, id) => {
  return {
    type: "checkBox",
    payload: { sector, section, entry, id }
  };
};
