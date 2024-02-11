const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    section.style.border = '2px solid red';
    section.style.marginBottom = '5px' ;
    section.style.borderRadius = '15px' ;
    section.style.backgroundColor = 'grey' ;
}

//specific id dhore style..
const placeContainer = document.getElementById('places-container');
placeContainer.style.backgroundColor = 'yellow';