const toObjectFromEntries = (object, [key, value]) => {
  const entry = { [key]: value };
  return { ...object, ...entry };
};

const getObjectFromEntries = (entries) =>
  entries.reduce(toObjectFromEntries, {});

export default getObjectFromEntries;
