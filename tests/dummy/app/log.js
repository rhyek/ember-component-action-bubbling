export default function(level, str) {
  const p = document.getElementById(level.toString());
  p.innerHTML = p.innerHTML + str + '<br/>';
}