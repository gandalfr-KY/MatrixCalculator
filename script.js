// script.js
var Module = {
    onRuntimeInitialized: function() {
        document.getElementById('calculateButton').addEventListener('click', function() {
            var num1 = document.getElementById('num1').value;
            var num2 = document.getElementById('num2').value;
            var addFunction = Module.cwrap('add', 'number', ['number', 'number']);
            var result = addFunction(Number(num1), Number(num2));
            document.getElementById('result').innerHTML = "Result: " + result;
        });
    }
};
