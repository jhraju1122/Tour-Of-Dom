// console.log('append.js');

//1.where to add
const placeList = document.getElementById('places-list');
//2.want to be added
 const li = document.createElement('li');
 li.innerText = 'pahartoli';

 //3.add the child
 placeList.appendChild(li);