function plantSeed() {
    const seedInput = document.getElementById('seed-input');
    const seedValue = seedInput.value.trim();
    if (seedValue) {
        const garden = document.getElementById('garden');
        const vine = document.createElement('div');
        vine.className = 'vine';
        vine.textContent = seedValue;
        garden.appendChild(vine);
        seedInput.value = '';
    }
}
