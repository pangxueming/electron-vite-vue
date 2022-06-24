export function setupPageRem() {
  if (document.body.clientWidth > 1000) {
    document.documentElement.style.fontSize = '50px';
  } else if (document.body.clientWidth > 750) {
    document.documentElement.style.fontSize = '35px';
  } else if (document.body.clientWidth <= 750) {
    document.documentElement.style.fontSize = '20px';
  }
}
