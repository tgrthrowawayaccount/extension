const text=document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a')

for (let i=0; i<text.length; i++) {
  if text[i].innerHTML.includes('[emoji637]') {
  text[i].innerHTML=text[i].innerHTML.replace('[emoji637]', '1' )}}
