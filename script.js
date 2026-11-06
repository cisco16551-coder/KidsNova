// ============================================================
// DATOS
// ============================================================

const materias = [
  { titulo: 'Lectura', icono: 'menu_book', color: '#FF6B6B', fondo: '#FFE5E5',
    desc: 'Aprende letras, vocales, consonantes, sílabas, palabras, oraciones y comprensión lectora mediante actividades.' },
  { titulo: 'Matemáticas', icono: 'calculate', color: '#268CFF', fondo: '#DDEEFF',
    desc: 'Practica números, conteo, sumas, restas, figuras geométricas, secuencias y razonamiento lógico.' },
  { titulo: 'Ciencias', icono: 'science', color: '#20B978', fondo: '#D9F9E9',
    desc: 'Descubre la naturaleza, los seres vivos, el cuerpo humano y diferentes temas del mundo que nos rodea.' },
  { titulo: 'Inglés', icono: 'language', color: '#FFA726', fondo: '#FFF0D5',
    desc: 'Conoce nuevas palabras, practica vocabulario, pronunciación y expresiones básicas del idioma inglés.' },
  { titulo: 'Computación', icono: 'computer', color: '#9B59E8', fondo: '#EEDFFF',
    desc: 'Aprende sobre las partes de una computadora, sus componentes y conceptos básicos de tecnología.' },
];

const beneficios = [
  { titulo: 'Aprendizaje interactivo', icono: 'sports_esports', color: '#7028E8', fondo: '#EDE4FF',
    desc: 'Los niños pueden aprender mediante juegos, actividades y ejercicios que hacen más entretenido el estudio.' },
  { titulo: 'Desarrollo de habilidades', icono: 'psychology', color: '#168BFA', fondo: '#E1F0FF',
    desc: 'Las actividades ayudan a practicar la memoria, la atención, el razonamiento y la comprensión.' },
  { titulo: 'Seguimiento del progreso', icono: 'trending_up', color: '#32C875', fondo: '#DDF9E9',
    desc: 'Los estudiantes pueden consultar sus puntos, avances, niveles y actividades completadas.' },
  { titulo: 'Motivación y recompensas', icono: 'emoji_events', color: '#FF884D', fondo: '#FFEBDC',
    desc: 'Los puntos, logros y recompensas motivan a continuar aprendiendo y superando nuevos retos.' },
];

const grados = [
  { titulo: '1.º de primaria', color: '#FF7777', fondo: '#FFE5E5',
    desc: 'Actividades iniciales para descubrir letras, números y conceptos básicos.' },
  { titulo: '2.º de primaria', color: '#268CFF', fondo: '#DDEEFF',
    desc: 'Refuerza la lectura, las operaciones básicas y los conocimientos escolares.' },
  { titulo: '3.º de primaria', color: '#20B978', fondo: '#D9F9E9',
    desc: 'Practica la comprensión, el razonamiento y la resolución de actividades.' },
  { titulo: '4.º de primaria', color: '#FFA726', fondo: '#FFF0D5',
    desc: 'Desarrolla nuevas habilidades y fortalece los conocimientos de diferentes materias.' },
  { titulo: '5.º de primaria', color: '#9B59E8', fondo: '#EEDFFF',
    desc: 'Continúa aprendiendo mediante ejercicios y retos educativos.' },
  { titulo: '6.º de primaria', color: '#00AFA5', fondo: '#D9F7F3',
    desc: 'Refuerza los conocimientos adquiridos y prepárate para nuevos aprendizajes.' },
];

const pasos = [
  { num: '01', titulo: 'Descarga KidsNova', icono: 'download', color: '#7028E8',
    desc: 'Obtén la aplicación e instálala en tu dispositivo Android.' },
  { num: '02', titulo: 'Crea tu cuenta', icono: 'person_add_alt_1', color: '#168BFA',
    desc: 'Regístrate para acceder a las actividades educativas.' },
  { num: '03', titulo: 'Elige una materia', icono: 'menu_book', color: '#00BFA6',
    desc: 'Explora las materias y selecciona el grado escolar.' },
  { num: '04', titulo: 'Aprende y gana puntos', icono: 'emoji_events', color: '#FF884D',
    desc: 'Completa actividades, supera niveles y descubre tus avances.' },
];

// ============================================================
// CONSTRUCCIÓN DE TARJETAS
// ============================================================

const icono = (nombre) => `<span class="material-icons-round">${nombre}</span>`;

function renderizar(idContenedor, lista, plantilla) {
  const cont = document.getElementById(idContenedor);
  cont.innerHTML = lista.map(plantilla).join('');
}

renderizar('gridMaterias', materias, (m) => `
  <article class="card card-materia" style="--c:${m.color};--bg:${m.fondo}">
    <div class="icon-box">${icono(m.icono)}</div>
    <h3>${m.titulo}</h3>
    <p>${m.desc}</p>
    <div class="more">Área de aprendizaje ${icono('arrow_forward')}</div>
  </article>`);

renderizar('gridBeneficios', beneficios, (b) => `
  <article class="card card-beneficio" style="--c:${b.color};--bg:${b.fondo}">
    <div class="icon-box">${icono(b.icono)}</div>
    <h3>${b.titulo}</h3>
    <p>${b.desc}</p>
  </article>`);

renderizar('gridGrados', grados, (g) => `
  <article class="card card-grado" style="--c:${g.color};--bg:${g.fondo}">
    <div class="icon-box">${icono('school')}</div>
    <h3>${g.titulo}</h3>
    <p>${g.desc}</p>
  </article>`);

renderizar('gridPasos', pasos, (p) => `
  <article class="card card-paso" style="--c:${p.color};--bg:color-mix(in srgb, ${p.color} 12%, white)">
    <div class="top">
      <div class="icon-box">${icono(p.icono)}</div>
      <span class="num">${p.num}</span>
    </div>
    <h3>${p.titulo}</h3>
    <p>${p.desc}</p>
  </article>`);

// ============================================================
// ANIMACIÓN DE APARICIÓN AL HACER SCROLL
// ============================================================

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada, i) => {
    if (entrada.isIntersecting) {
      setTimeout(() => entrada.target.classList.add('visible'), i * 80);
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card').forEach((c) => observador.observe(c));

// ============================================================
// MENÚ MÓVIL
// ============================================================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => navLinks.classList.toggle('abierto'));
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('abierto'))
);

// ============================================================
// DESCARGA DEL APK (aviso si el archivo no existe)
// ============================================================

document.querySelectorAll('a[href="apk/kidsnova.apk"]').forEach((enlace) => {
  enlace.addEventListener('click', async (e) => {
    try {
      const r = await fetch(enlace.href, { method: 'HEAD' });
      if (!r.ok) throw new Error('No encontrado');
    } catch (err) {
      // Si se abre con file:// fetch falla; en ese caso dejamos que el navegador intente la descarga.
      if (location.protocol === 'file:') return;
      e.preventDefault();
      alert('No se encontró el archivo apk/kidsnova.apk. Colócalo en la carpeta "apk" del sitio.');
    }
  });
});
