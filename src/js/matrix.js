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
            rowContainer.appendChild(input);
        }
        container.appendChild(rowContainer);
    }
});

document.getElementById('calculateDetButton').addEventListener('click', function() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const resultContainer = document.getElementById('result');

    const matrix = new Module.Matrix(size, size);

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            matrix.set(i, j, new Module.Fraction(document.getElementById(`matrixInput_${i}_${j}`).value));
        }
    }

    const result = matrix.determinant();
    resultContainer.textContent = `Result: ${result.to_string()}`;

    matrix.delete();
});

document.getElementById('inverseButton').addEventListener('click', function() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const matrixContainer = document.getElementById('matrixContainer');

    // Clear previous results
    matrixContainer.innerHTML = '';

    const matrix = new Module.Matrix(size, size);

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            matrix.set(i, j, new Module.Fraction(document.getElementById(`matrixInput_${i}_${j}`).value));
        }
    }

    const inv = matrix.inverse();

    // Create text boxes to display the matrix
    for(let i = 0; i < size; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.style.display = 'flex';
        
        for(let j = 0; j < size; j++) {
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('size', '10');
            input.value = inv.get(i, j).to_string();
            input.readOnly = true;
            rowContainer.appendChild(input);
        }
        matrixContainer.appendChild(rowContainer);
    }

    matrix.delete();
    inv.delete();
});