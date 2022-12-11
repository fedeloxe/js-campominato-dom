// Tramite una funzione creo la classe dei quadrati 
function createSquare(){
  
    //per fare in modo che non generi la griglia più volte do a grid una stringa vuota prima del ciclo che genera la griglia 
    document.getElementById('grid').innerHTML="";

    for(let i=0; i<100; i++){
        let cell= document.createElement('div')
    
        cell.classList.add('square')


        //assegno alle celle il numero corrispondente
        cell.innerText= i+1

        //aggingo il click alla singola cella
        cell.addEventListener('click', function(){
            this.classList.add('click')
            console.log('hai cliccato il numero '+ this.innerText)
        })
         
        //tramite appenchild assegno al figlio di grid la variabile cell che aggiunge la classe square a ogni singolo elemento 
        document.getElementById('grid').appendChild(cell);

    }

  
}
// richiamo la funzione nel bottone in modo tale da generare la griglia solo al click 
let button = document.getElementById('play');
button.addEventListener('click', function(){
    createSquare()

   
})


    




