/**
 * 
 * @param {HTMLElement} map 
 * @param {HTMLButtonElement} button 
 */
function Montagna (map, button) {
    this.btnGenerator = button;
    this.mapContainer = map;
    this.__SIZE_HEIGHT = 10;
    this.__SIZE_WIDTH = 10;
    this.dataMatrix = [];
};

Montagna.prototype.init = function init () {
    this.btnGenerator.addEventListener(
        'click',
        () => {
            this.cleanGrid();
            this.generateGrid();
        }
    );
};

Montagna.prototype.cleanGrid = function cleanGrid () {
    this.mapContainer.innerHTML = '';
};

Montagna.prototype.generateGrid = function generateGrid () {
    for (let i = 0; i < this.__SIZE_HEIGHT; i++) {
        this.dataMatrix[i] = []; // nuovo row logico

        const row = this.createRowElement();
        console.log(row); // <div class="row"></div>
        for(let j = 0; j < this.__SIZE_WIDTH; j++) {
            // genera numero casuale
            const randomNum = Math.floor(Math.random()*100);
            const block = this.createBlockElement(randomNum, i, j);

            this.dataMatrix[i].push({
                height: randomNum,
                block: block
            }); // inserisco numero generato all'interno della matrice logica

            row.appendChild(block); // <div class="row"><div class="block"></div> .... <div class="block"></div></div>
        }

        this.mapContainer.appendChild(row);
    }
};

/**
 * Metodo che genera un elemento riga
 * @return {HTMLDivElement}
 */
Montagna.prototype.createRowElement = function createRowElement () {
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
};

/**
 * Metodo che genera un blocco di montagna e lo ritorna
 * @return {HTMLDivElement}
 */
Montagna.prototype.createBlockElement = function createBlockElement (numero, nRiga, nColonna) {
    let block = document.createElement('div'); // creo l'elemento div
    block.innerText = numero; // inserisco il numero
    block.classList.add('block'); // aggiungo la classe 'block'
    block.setAttribute('n_row', nRiga);
    block.setAttribute('n_col', nColonna);

    this.enhanceBlockWithCreateSource(block);

    return block; // <div class="block"></div>
};

/**
 * @param {HTMLDivElement} elementThatWillGenerateSource
 */
Montagna.prototype.enhanceBlockWithCreateSource = function enhanceBlockWithCreateSource (elementThatWillGenerateSource) {
    elementThatWillGenerateSource.addEventListener(
        'click',
        (event) => {
            // this qui è uguale a <div class="block"></div> che ha fatto scattare l'evento
            const elementoCheHaFattoScatenareQuestoEvento = event.target;
            
            // elementoCheHaFattoScatenareQuestoEvento === elementThatWillGenerateSource === true
            elementoCheHaFattoScatenareQuestoEvento.classList.add('wet');
            // this.classList.add('wet');
            const n_row = elementoCheHaFattoScatenareQuestoEvento.getAttribute('n_row');
            const n_col = elementoCheHaFattoScatenareQuestoEvento.getAttribute('n_col');

            this.flowTheRiver(parseInt(n_row, 10), parseInt(n_col, 10));
        }
    );
};

Montagna.prototype.flowTheRiver = function flowTheRiver (x, y) {
    if (this.dataMatrix[x] !== undefined && this.dataMatrix[x][y] !== undefined) {
        const num = this.dataMatrix[x][y].height;
    
        for (let R = x-1; R < x + 2; R++) {
            for (let C = y-1; C < y + 2; C++) {
                // if (R === i && C === y) continue;
                if (this.dataMatrix[R] !== undefined && this.dataMatrix[R][C] !== undefined) {
                    if (this.dataMatrix[R][C].height < num) {
                        this.dataMatrix[R][C].block.classList.add('wet');
                        this.flowTheRiver(R, C);
                    }
                } else {
                    return;
                }
            }
        }
    } else return;
};

Montagna.prototype.checkIfSidesFlow = function checkIfSidesFlow (i, y) {
    
    // if (this.dataMatrix[x-1][y-1] !== undefined && num > this.dataMatrix[x-1][y-1].height){
    //     // this.dataMatrix[x-1][y-1].isWet = true;
    //     this.dataMatrix[x-1][y-1].div.classList.add('wet');
    //     this.checkIfSidesFlow(x-1, y-1)
    // }
    // if (this.dataMatrix[x][y-1] !== undefined && num > this.dataMatrix[x][y-1].height){
    //     // this.dataMatrix[x][y-1].isWet = true;
    //     this.dataMatrix[x][y-1].div.classList.add('wet');
    //     this.checkIfSidesFlow(x, y-1)
    // }
    // if (this.dataMatrix[x+1][y-1] !== undefined && num > this.dataMatrix[x+1][y-1].height){
    //     // this.dataMatrix[x+1][y-1].isWet = true;
    //     this.dataMatrix[x+1][y-1].div.classList.add('wet');
    //     this.checkIfSidesFlow(x+1, y-1)
    // }

    // if (this.dataMatrix[x-1][y] !== undefined && num > this.dataMatrix[x-1][y].height){
    //     // this.dataMatrix[x-1][y].isWet = true;
    //     this.dataMatrix[x-1][y].div.classList.add('wet');
    //     this.checkIfSidesFlow(x-1, y)
    // }
    // // if (this.dataMatrix[x][y] !== undefined && num > this.dataMatrix[x][y].height){
    //     // this.dataMatrix[x][y].isWet = true;
    //     // this.dataMatrix[x][y].div.classList.add('wet');
    //     // this.checkIfSidesFlow(x, y)
    // // }
    // if (this.dataMatrix[x+1][y] !== undefined && num > this.dataMatrix[x+1][y].height){
    //     // this.dataMatrix[x+1][y].isWet = true;
    //     this.dataMatrix[x+1][y].div.classList.add('wet');
    //     this.checkIfSidesFlow(x+1, y)
    // }

    // if (this.dataMatrix[x-1][y+1] !== undefined && num > this.dataMatrix[x-1][y+1].height){
    //     // this.dataMatrix[x-1][y+1].isWet = true;
    //     this.dataMatrix[x-1][y+1].div.classList.add('wet');
    //     this.checkIfSidesFlow(x-1, y+1)
    // }
    // if (this.dataMatrix[x][y+1] !== undefined && num > this.dataMatrix[x][y+1].height){
    //     // this.dataMatrix[x][y+1].isWet = true;
    //     this.dataMatrix[x][y+1].div.classList.add('wet');
    //     this.checkIfSidesFlow(x, y+1)
    // }
    // if (this.dataMatrix[x+1][y+1] !== undefined && num > this.dataMatrix[x+1][y+1].height){
    //     // this.dataMatrix[x+1][y+1].isWet = true;
    //     this.dataMatrix[x+1][y+1].div.classList.add('wet');
    //     this.checkIfSidesFlow(x+1, y+1)
    // }
};
