export default function filterByCategory(arr, category) {
  if (category === '' || category === 'All') {
    return arr;
  }
  return arr.filter((item) => item.strCategory === category);
}
