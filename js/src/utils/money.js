export default function money(number) {
  // Note, given the JSON data has numbers and not decimal strings
  // this is the best we can do
  return number.toFixed(2);
}
