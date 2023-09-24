function applyLightMode() {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#333333';
    document.querySelector('main').style.backgroundColor = '#ffffff';
    document.querySelector('footer').style.backgroundColor = '#7ab5e9';
    document.querySelector('header').style.backgroundColor = '#7ab5e9';
    // Outras personalizações de estilo para o modo claro
}

  // Função para aplicar o modo de leitura escuro
function applyDarkMode() {
    document.body.style.backgroundColor = '#333333';
    document.body.style.color = '#333333';
    document.querySelector('main').style.backgroundColor = '#000000';
    document.querySelector('footer').style.backgroundColor = '#474747';
    document.querySelector('header').style.backgroundColor = '#474747';
    // Outras personalizações de estilo para o modo escuro
}

  // Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
    localStorage.setItem('mode', 'light');
    applyLightMode();
    } else {
    localStorage.setItem('mode', 'dark');
    applyDarkMode();
    }
}

  // Função para verificar a preferência de modo do usuário e aplicar
function checkAndApplyModePreference() {
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
    applyDarkMode();
    } else {
    applyLightMode();
    }
}

  // Ouvinte de evento para alternar o modo quando um botão for clicado
const modeToggleButton = document.getElementById('mode-toggle-button');
modeToggleButton.addEventListener('click', toggleDarkMode);