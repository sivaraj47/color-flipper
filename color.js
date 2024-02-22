const btn = document.getElementById("btn");
const colorT = document.getElementById("color");
const wrapper = document.getElementById("wrapper");

const  hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',function(){
  let hexcolor ='#';
  for (i=0;i<6;i++){
    hexcolor +=randHex();
  }
  wrapper.style.backgroundColor=hexcolor;
  colorT.innerHTML=hexcolor;
});

function randHex(){
  let randIndex = Math.floor(Math.random()*16);
  return hex[randIndex];
}

