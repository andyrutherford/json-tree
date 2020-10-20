export default (str) => {
  if (typeof str !== 'string') return false;
  return !!str.match(/\.(jpg|jpeg|gif|png|tiff|bmp)/gi);
};
