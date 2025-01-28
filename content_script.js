const text = document.getElementsByTagName("*")

for (let i=0; i<text.length; i++) {
  if (text[i].innerHTML.includes('[emoji637]')) {
  text[i].innerHTML=text[i].innerHTML.replace('[emoji637]', '1' )}}
