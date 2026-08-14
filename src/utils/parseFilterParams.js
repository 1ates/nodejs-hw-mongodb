const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isType = (type) => ['work', 'home', 'personal'].includes(type);
  if (isType(type)) return type;
};

const parseFavourite = (favourite) => {
  const isString = typeof favourite === 'string';
  if (!isString) return;

  const isFavourite = (favourite) => ['true', 'false'].includes(favourite);
  if (isFavourite(favourite)) return favourite === 'true';
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseType(contactType);
  const parsedIsFavourite = parseFavourite(isFavourite);

  return {
    type: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
