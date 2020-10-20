export default async (str) => {
  try {
    new URL(str);
    const res = await fetch(str);
    const json = await res.json();
    return json;
  } catch (error) {
    throw error;
  }
};
