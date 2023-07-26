document.getElementById('createInputsButton').addEventListener('click', function() {
    var length = document.getElementById('vecLength').value;
    if(length > 15) {
        alert('Error: Length cannot exceed 15');
        return; 
    }
    var container = document.getElementById('inputContainer');
    container.innerHTML = '';
    for (var i = 0; i < length; i++) {
        var input1 = document.createElement('input');
        input1.type = 'text';
        input1.id = 'num1_' + i;
        container.appendChild(input1);

        container.appendChild(document.createTextNode(' '));       

        var input2 = document.createElement('input');
        input2.type = 'text';
        input2.id = 'num2_' + i;
        container.appendChild(input2);
        container.appendChild(document.createElement('br'));
    }
});

document.getElementById('calculateButton').addEventListener('click', function() {
    var length = document.getElementById('vecLength').value;
    var vec1 = new Module.VectorFraction();
    var vec2 = new Module.VectorFraction();

    for (var i = 0; i < length; i++) {
        var frac1 = new Module.Fraction(document.getElementById('num1_' + i).value);
        var frac2 = new Module.Fraction(document.getElementById('num2_' + i).value);
        vec1.push_back(frac1);
        vec2.push_back(frac2);       
    }

    var resultVec = Module.addvec(vec1, vec2);
    var result = [];

    for (var i = 0; i < resultVec.size(); i++) {
        result.push(resultVec.get(i).to_string());
    }

    document.getElementById('result').innerHTML = "Result: " + result.join(', ');

    vec1.delete();
    vec2.delete();
    resultVec.delete();
});
