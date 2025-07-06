# 🌗 Librería de Modo Oscuro/Claro con Interruptor Flotante

Esta librería proporciona un **interruptor personalizable** para cambiar entre **modo claro y modo oscuro**, con un diseño moderno basado en SVG, estilo `switch` y **posicionamiento flotante y arrastrable en pantalla**.

---

## 📦 Instalación

Puedes integrarla fácilmente en tu proyecto HTML de la siguiente forma:

### Descarga e incluye manualmente
Guarda los siguientes archivos en tu proyecto:

- `css/componente.css`
- `js/componente.js`

Luego, inclúyelos así:

```html
<link rel="stylesheet" href="css/componente.css">
<script src="js/componente.js"></script>
```
🧪 Uso Básico
Paso 1. Agrega el componente donde gustes

```html
<div id="switch-tema" class="switch-container">
  <label class="interruptor">
    <input type="checkbox" />
    <span class="slider">
      <span class="icono-circulo"></span>
    </span>
  </label>
</div>
```
Personalización
Puedes modificar los íconos y el comportamiento fácilmente usando parámetros opcionales:
```js
crearInterruptor('#switch-tema', {
  iconoClaro: '<svg>...</svg>',  // Ícono personalizado para modo claro
  iconoOscuro: '<svg>...</svg>', // Ícono personalizado para modo oscuro
  onToggle: (estado) => {
    console.log('Modo actual:', estado ? 'Oscuro' : 'Claro');
  }
});
```


