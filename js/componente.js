(function crearInterruptor(selector, opciones = {}) {
  const contenedor = document.querySelector(selector);
  if (!contenedor) return;

  const toggle = contenedor.querySelector('input[type="checkbox"]');
  const icono = contenedor.querySelector('.icono-circulo');

  const svgClaro = opciones.iconoClaro || `
    <svg xmlns="http://www.w3.org/2000/svg" fill="#fdd835" viewBox="0 0 24 24" width="14" height="14">
      <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8zm10.45 10.45l1.8 1.79 1.41-1.41-1.79-1.8zm1.79-10.45l-1.79 1.8 1.41 1.41 1.8-1.79zM4.84 17.24l1.8-1.79-1.41-1.41-1.79 1.8zM12 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm8-6a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zm-14 0a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm7-3a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
    </svg>`;

  const svgOscuro = opciones.iconoOscuro || `
    <svg xmlns="http://www.w3.org/2000/svg" fill="#90caf9" viewBox="0 0 24 24" width="14" height="14">
      <path d="M12 3a9 9 0 0 0 0 18c4.97 0 9-4.03 9-9 0-2.21-.89-4.21-2.34-5.66C17.21 4.89 15.21 4 13 4c-1.1 0-2.13.23-3.07.63C10.14 4.23 11.05 4 12 4c2.76 0 5 2.24 5 5 0 2.22-1.79 4.01-4.01 4.01A4.005 4.005 0 0 1 9 9c0-1.27.5-2.41 1.31-3.24A8.978 8.978 0 0 0 12 3z"/>
    </svg>`;

  function actualizarIcono(estado) {
    icono.innerHTML = estado ? svgOscuro : svgClaro;
  }
  
  toggle.addEventListener('change', () => {
    const activo = toggle.checked;
    document.body.classList.toggle('dark-mode', activo);
    actualizarIcono(activo);
    localStorage.setItem('modoOscuro', activo);
    if (typeof opciones.onToggle === 'function') opciones.onToggle(activo);
  });

  // Estado inicial
  const preferencia = localStorage.getItem('modoOscuro');
  const esOscuro = preferencia !== null ? preferencia === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  toggle.checked = esOscuro;
  document.body.classList.toggle('dark-mode', esOscuro);
  actualizarIcono(esOscuro);

  // Hacer movible el switch
  let posX = 0, posY = 0, mouseX = 0, mouseY = 0;
  contenedor.onmousedown = function (e) {
    e.preventDefault();
    mouseX = e.clientX;
    mouseY = e.clientY;
    posX = contenedor.offsetLeft;
    posY = contenedor.offsetTop;

    document.onmousemove = function (e) {
      e.preventDefault();
      const dx = e.clientX - mouseX;
      const dy = e.clientY - mouseY;
      contenedor.style.left = posX + dx + 'px';
      contenedor.style.top = posY + dy + 'px';
    };

    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
})('#switch-tema', {
  onToggle: (estado) => console.log('Modo oscuro activo:', estado)
});
