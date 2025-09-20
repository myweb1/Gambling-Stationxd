var salary = 100; // Define un salario fijo
currentMoney = Number(localStorage.getItem('money')) || 0; // Obtiene el dinero actual del almacenamiento local o inicia en 0

function work() {
    currentMoney += salary; // Incrementa el dinero actual por el salario
    document.getElementById("moneyDisplay").innerText = "Vizualisador de dinero:" + currentMoney; // Actualiza la visualización del dinero
    
    
}
function autosave() {
    localStorage.setItem('money', currentMoney);
    alert("Progreso guardado! Dinero actual: $" + currentMoney);
}
window.addEventListener("keydown", function entermalo(enter) {
    if ( enter.keyCode == "13" ) {
        enter.preventDefault()
    }
})
window.setInterval(autosave, 60000); // Guarda cada 60 segundos