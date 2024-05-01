let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food1.png')";
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('https://c.ndtvimg.com/2019-04/gbkiutf8_chicken-tikka-650_650x400_09_April_19.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350')";
})