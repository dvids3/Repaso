document.getElementById('showBtn').addEventListener('click', () => {
  const key = document.getElementById('figuraSelect').value;
  const info = data[key];
  const container = document.getElementById('result');
  const areaContainer = document.getElementById('areaCalculator');
  const areaForm = document.getElementById('areaForm');
  const areaResult = document.getElementById('areaResult');

  document.querySelectorAll('.figure-img').forEach(img => {
    img.style.display = 'none';
  });

  Array.from(container.children).forEach(child => {
    if (!child.classList.contains('figure-img')) {
      child.remove();
    }
  });

  areaContainer.style.display = 'none';
  areaForm.innerHTML = '';
  areaResult.textContent = '';

  if (!info) {
    container.innerHTML = '<p>Selecciona una figura válida</p>';
    return;
  }

  const imgElement = document.getElementById(`${key}-img`);
  if (imgElement) imgElement.style.display = 'block';

  const addSection = (title, content) => {
    const h3 = document.createElement('h3');
    h3.textContent = title;
    container.appendChild(h3);

    const div = document.createElement('div');
    div.innerHTML = content;
    container.appendChild(div);
  };

  addSection('Definición', info.definition);
  addSection('Propiedades', `<p>${info.properties}</p>`);
  addSection('Axiomas', info.axioms);
  addSection('Teoremas', info.theorems);

  const cuadrilateros = ['cuadrado', 'rectangulo_cuad', 'rombo', 'romboide', 'trapecio', 'trapecio_isoceles'];

  if (cuadrilateros.includes(key)) {
    areaContainer.style.display = 'block';

    const campos = {
      cuadrado: ['Lado'],
      rectangulo_cuad: ['Base', 'Altura'],
      rombo: ['Diagonal Mayor', 'Diagonal Menor'],
      romboide: ['Base', 'Altura'],
      trapecio: ['Base Mayor', 'Base Menor', 'Altura'],
      trapecio_isoceles: ['Base Mayor', 'Base Menor', 'Altura']
    };

    campos[key].forEach(label => {
      const lbl = document.createElement('label');
      lbl.textContent = label;
      const input = document.createElement('input');
      input.type = 'number';
      input.name = label;
      input.required = true;
      input.step = 'any';
      areaForm.appendChild(lbl);
      areaForm.appendChild(input);
    });

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = 'Calcular Área';
    areaForm.appendChild(btn);

    areaForm.onsubmit = function (e) {
      e.preventDefault();
      const datos = Object.fromEntries(new FormData(areaForm).entries());
      let area = 0;

      switch (key) {
        case 'cuadrado':
          area = Math.pow(parseFloat(datos['Lado']), 2);
          break;
        case 'rectangulo_cuad':
        case 'romboide':
          area = parseFloat(datos['Base']) * parseFloat(datos['Altura']);
          break;
        case 'rombo':
          area = (parseFloat(datos['Diagonal Mayor']) * parseFloat(datos['Diagonal Menor'])) / 2;
          break;
        case 'trapecio':
        case 'trapecio_isoceles':
          area = ((parseFloat(datos['Base Mayor']) + parseFloat(datos['Base Menor'])) * parseFloat(datos['Altura'])) / 2;
          break;
      }

      areaResult.textContent = `Área: ${area.toFixed(2)} unidades cuadradas.`;
    };
  }
});
