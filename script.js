const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'マシンを起動') {
    button.value = 'マシンを停止';
    paragraph.textContent = 'マシンが起動しています！';
  } else {
    button.value = 'マシンを起動';
    paragraph.textContent = 'マシンが停止しています。';
  }
}