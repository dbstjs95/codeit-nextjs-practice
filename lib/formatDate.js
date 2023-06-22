export default function formatData(date) {
  const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const YY = String(date.getUTCFullYear());

  return `${YY}. ${MM}. ${dd}.`;
}