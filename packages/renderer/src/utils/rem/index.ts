export function setupPageRem() {
  var deviceWidth = document.documentElement.clientWidth;

  if (deviceWidth > 750) {
    document.documentElement.style.fontSize = '50px';
  } else if (deviceWidth <= 750) {
    document.documentElement.style.fontSize = '25px';
  }

}