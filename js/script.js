function createBombsArray (min, max){
    let bombs = []
    let i=0;
    while(i < 16){
        let number = Math.floor(Math.random() * (max-min +1)) + min;

        if(!bombs.includes(number)){
            bombs.push(number)
            i++;
        }
    }

    return bombs

}


function createNewGame(){
    let difficulty = parseInt(document.getElementById('level').value);

    let cellsNumber;
    let cellsPerRow;

    switch(difficulty){
        case 1: 
        cellsNumber = 100;
        cellsPerRow = 10;
        break;
        case 2:
            cellsNumber = 81;
            cellsPerRow = 9;
            break;
        case 3:
            cellsNumber = 49;
            cellsPerRow = 7;
            break
        default:
            cellsNumber = 100;
            cellsPerRow = 10;
            break
    }

    let arrayBombs = createBombsArray(1, cellsNumber)
    console.log(arrayBombs);

    generateGameGrid(arrayBombs, cellsNumber, cellsPerRow);
}



function createSingleCell(num, cells_per_row){
    const cell = document.createElement('div');

    cell.classList.add('square');

    let sideLenght= `calc(100% / ${cells_per_row})`;

    cell.style.width= sideLenght;
    cell.style.height= sideLenght;

    cell.innerText = num;

    return cell;
}



function generateGameGrid(bombs, cellsNumber, cells_per_row){
    
    document.querySelector('.container-campo').innerHTML= '';
    
    const grid = document.createElement('div');
    grid.classList.add('grid');

    let goodCells = 0 

    for(let i=1; i<=cellsNumber; i++){
        const cell = createSingleCell(i, cells_per_row);
        cell.addEventListener('click', function(){
            this.classList.add('click');
            console.log('hai cliccato il numero '+ this.innerText)


            if(bombs.includes(parseInt(this.innerText))){
                alert('hai cliccato una bomba')
                this.classList.add('bomb');
                grid.classList.add('events-none')
                alert('Il tuo punteggio è : ' +goodCells)
            }

            else{
                goodCells++
                
            }
        })
        grid.appendChild(cell);
    }

    document.querySelector('.container-campo').appendChild(grid)
}


document.getElementById('play').addEventListener('click', function(){
    createNewGame();
    
})