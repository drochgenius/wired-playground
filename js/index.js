function onButtonClick(evt) {
    console.log('I was clicked', evt.target.id);
}

document.getElementById('add').addEventListener('click', onButtonClick);
