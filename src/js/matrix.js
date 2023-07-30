document.getElementById('createInputsButton').addEventListener('click', function() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const container = document.getElementById('inputContainer');

    if(size !== size || size > 10) {
        alert("Please provide a square matrix with size up to 10x10.");
        return;
    }

    // Clear previous inputs
    container.innerHTML = '';

    for(let i = 0; i < size; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.style.display = 'flex';
        
        for(let j = 0; j < size; j++) {
            const input = document.createElement('input');
            input.setAttribute('id', `matrixInput_${i}_${j}`);
            input.setAttribute('type', 'text');
            input.setAttribute('size', '10');
            input.setAttribute('placeholder', `Cell ${i}, ${j}`);

            // Add keydown event listener to the input
            input.addEventListener('keydown', function(e) {
                if(e.key === "ArrowDown") {
                    e.preventDefault();
                    let nextInput = document.getElementById(`matrixInput_${Math.min(i + 1, size - 1)}_${j}`);
                    if(nextInput) nextInput.focus();
                }
                else if(e.key === "ArrowUp") {
                    e.preventDefault();
                    let nextInput = document.getElementById(`matrixInput_${Math.max(i - 1, 0)}_${j}`);
                    if(nextInput) nextInput.focus();
                }
                else if(e.key === "ArrowRight") {
                    if (e.target.selectionStart === this.value.length) {
                        e.preventDefault();
                        let nextInput = document.getElementById(`matrixInput_${i}_${Math.min(j + 1, size - 1)}`);
                        if(nextInput) nextInput.focus();
                    }
                }
                else if(e.key === "ArrowLeft") {
                    if (e.target.selectionStart === 0) {
                        e.preventDefault();
                        let nextInput = document.getElementById(`matrixInput_${i}_${Math.max(j - 1, 0)}`);
                        if(nextInput) nextInput.focus();
                    }
                }
            });

            rowContainer.appendChild(input);
        }
        container.appendChild(rowContainer);
    }
});


document.getElementById('calculateButton').addEventListener('click', function() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const resultContainer = document.getElementById('result');
    const matrixContainer = document.getElementById('matrixContainer');
    // Clear previous results
    matrixContainer.innerHTML = '';

    try {
        const matrix = new Module.Matrix(size, size);

        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                const tmp = Module.stringToComplex(document.getElementById(`matrixInput_${i}_${j}`).value);
                matrix.set(i, j, tmp);
            }
        }

        const result = matrix.determinant();
        resultContainer.textContent = `Determinant: ${Module.complexToString(result)}`;

        const inv = matrix.inverse();
        if (inv.Height() != 0) {
            for(let i = 0; i < size; i++) {
                const rowContainer = document.createElement('div');
                rowContainer.style.display = 'flex';
                
                for(let j = 0; j < size; j++) {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'text');
                    input.setAttribute('size', '10');
                    input.value = Module.complexToString(inv.get(i, j));
                    input.readOnly = true;
                    rowContainer.appendChild(input);
                }
                matrixContainer.appendChild(rowContainer);
            }
        }
        
        matrix.delete();

    } catch (e) {
        // If an error occurs, display an alert with the error message
        alert("入力値が正しくありません。");
    }
});


