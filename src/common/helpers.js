export const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 1000);
};
export const transformCharacterToSpace = (string) => {
  return string.replace("_", " ");
};
