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
}

Montagna.prototype.generateGrid = function generateGrid () {
    for (let i = 0; i < this.__SIZE_HEIGHT; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        console.log(row); // <div class="row"></div>
        for(let j = 0; j < this.__SIZE_WIDTH; j++) {
            const block = document.createElement('div');
            block.innerText = Math.floor(Math.random()*100);
            block.classList.add('block');
            console.log(block); // <div class="block"></div>

            row.appendChild(block); // <div class="row"><div class="block"></div> .... <div class="block"></div></div>
        }

        this.mapContainer.appendChild(row);
    }
};
