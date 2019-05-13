export const updateEntry = (entry, section) => {
  return {
    type: "UPDATE_ENTRY",
    payload: entry,
    section
  };
};
