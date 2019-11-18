

const handleFloatingLabel = function () {
    const floatingInput = document.querySelector('.js-name-input'),
        floatingLabel = document.querySelector('.js-name-label');
        console.log(floatingLabel);
        console.log(floatingInput);
        

    //check of iets ingevult is in blur event
    floatingInput.addEventListener('blur', function() {
        console.log(floatingInput.value);
        
		if(floatingInput.value.length > 0){
            floatingLabel.classList.add('is-floating');
        }else{
            floatingLabel.classList.remove('is-floating');
        }
    })
    // voeg een klas is-floating toe aks er een value is
    // maak die klas en zorg ervoor dat bovenaan blijft
    // als leeg terug er af
};

document.addEventListener( 'DOMContentLoaded', function() {
    console.log('domcontent loaded 👍');
    handleFloatingLabel();
});