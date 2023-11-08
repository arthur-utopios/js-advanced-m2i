const pseudoInput = document.getElementById('pseudo');
const saveForm = document.getElementById('save');

pseudoInput.addEventListener('input', function(event) {
    event.preventDefault();
    localStorage.setItem('pseudo', this.value);
});

saveForm.addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.removeItem('pseudo');
    pseudoInput.value = "";
});

pseudoInput.value = localStorage.getItem('pseudo');