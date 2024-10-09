export default async function handler() {
  const response = await fetch('https://cat-fact.herokuapp.com/facts');
  const data = await response.json();
  return Array.isArray(data) ? data[Math.floor(Math.random() * data.length)]?.text as string : undefined;
}
