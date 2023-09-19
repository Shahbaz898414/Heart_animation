// const b=document.querySelector("body")

document.addEventListener('mousemove',(e)=>{

  let b=document.querySelector('body');
  let he=document.createElement('span')

  let x=e.offsetX;
  let y=e.offsetY;

    he.style.left=`${x}px`;
    he.style.top=`${y}px`;


 const size=Math.random()*80;
  he.style.width=20+size+"px";
  he.style.height=20+size+"px";


  // const x=event.clientX;
  // const y=event.clientY;
  // const he=document.createElement("span");

  let t=Math.random()*360;
  he.style.transform='rotate('+t+'deg)'

 


  b.appendChild(he);

  setTimeout(function(){
    he.remove();
  },
  1000);



})