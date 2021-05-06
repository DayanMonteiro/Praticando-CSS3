var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');

for ( var i = 0; i < selectPlanButtons.length; i++ ) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
        
    });
}



// console.log(backdrop); 
//backdrop.style.display = 'block';
//console.dir(selectPlanButtons);

