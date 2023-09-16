//Ein Programm zur Ausführung einer Suchanfrage

const searchInput = document.querySelector('.header_input'); //Search-input

//event-Handler für Search-input
searchInput.addEventListener('keyup', (event)=>{
    event.preventDefault(); //
    if( event.code === 'Enter' ){
        let inputValue = searchInput.value;
        let inputArray = inputValue.split(); // macht ein Array aus einer Zeile
        let inputQuery = inputArray.join('+'); // wandelt das Array in eine String mit '+' anstatt Leerzeichen um 
        window.location.href = `https://www.google.com/search?q=${inputQuery}`; //leitet zur Google-Suchseite weiter
    }
})
