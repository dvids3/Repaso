
  const data = {
  equilatero: {
    name: 'Triángulo Equilátero',
    image: "img/Equilatero.png",
    definition: 'Un triángulo con sus tres lados y sus tres ángulos iguales.',
    properties: 'Lados iguales; Ángulos de 60°; Simetría rotacional de orden 3; Centroide, incentro, circuncentro y ortocentro coinciden.',
    axioms: '<ol><li>Por dos puntos pasa una única recta.</li><li>Se puede trazar una recta infinita en cualquier dirección.</li><li>Se puede describir un círculo con cualquier centro y radio.</li><li>Dos ángulos rectos son iguales.</li><li>Por un punto exterior a una recta pasa una única paralela a dicha recta.</li></ol>',
    theorems: '<ul><li>Suma de ángulos interiores: 180°.</li><li>Área = (lado²·√3)/4.</li><li>Relación de Euler en triángulos: centroide divide medianas en 2:1.</li></ul>'
    },

  obtusangulo: {
    name: 'Triángulo Obtusángulo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Obtuse_triangle.svg/200px-Obtuse_triangle.svg.png',
    definition: 'Un triángulo que tiene un ángulo interno mayor de 90°.',
    properties: 'Un ángulo obtuso; Circuncentro y ortocentro pueden estar fuera.',
    axioms: '<ul><li>Un triángulo puede tener un ángulo mayor a 90°.</li><li>La suma de sus ángulos internos es 180°.</li></ul>',
    theorems: '<ul><li>Suma de ángulos: 180°.</li><li>Teorema de la altura para triángulos obtusos.</li><li>Leyes del seno y del coseno.</li></ul>'
    },

  trapezoide: {
    name: 'Trapezoide',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Trapezoid.svg/200px-Trapezoid.svg.png',
    definition: 'Cuadrilátero sin lados paralelos.',
    properties: 'Lados sin paralelismo; Puede tener lados o ángulos iguales.',
    axioms: 'Mismos 5 axiomas euclidianos.',
    theorems: '<ul><li>Suma de ángulos interiores = 360°.</li><li>No aplican teoremas clásicos de paralelogramo.</li></ul>'
    },

  isosceles: {
    name: 'Triángulo Isósceles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Isosceles_triangle.svg/200px-Isosceles_triangle.svg.png',
    definition: 'Un triángulo con al menos dos lados iguales y, por tanto, dos ángulos iguales.',
    properties: 'Dos lados iguales (laterales); Base distinta; Ángulos en la base iguales; Altura, mediana y bisectriz coinciden sobre la base.',
    axioms: "<ol><li>Definición: Tiene dos lados iguales y dos ángulos iguales.</li><li>Ángulos base: Si dos lados son iguales, sus ángulos opuestos también.</li><li>Recíproco: Si dos ángulos son iguales, los lados opuestos son iguales.</li><li>Bisectriz del vértice: También es mediana, altura y mediatriz.</li><li>Simetría: Tiene un eje de simetría por el vértice y punto medio de la base.</li><li>Coincidencia de líneas: Altura, mediana y bisectriz de la base coinciden.</li><li>Teorema de la mediatriz: La mediatriz pasa por el vértice opuesto.</li></ol>",
    theorems: '<ul><li>Suma de ángulos interiores: 180°.</li><li>Área = (base·altura)/2.</li><li>Teorema de la bisectriz: divide base proporcionalmente.</li><li>Criterios de congruencia: Lado-Ángulo-Lado (LAL).</li></ul>'
    },

  escaleno: {
    name: 'Triángulo Escaleno',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Scalene_triangle.svg/200px-Scalene_triangle.svg.png',
    definition: 'Un triángulo con sus tres lados y sus tres ángulos desiguales.',
    properties: 'Lados y ángulos todos distintos; ningún eje de simetría.',
    axioms: '<ol><li>Lados y ángulos desiguales: Todos sus lados y ángulos tienen medidas diferentes.</li><li>Sin simetría: No tiene ejes de simetría.</li><li>Desigualdad triangular: La suma de dos lados siempre es mayor que el tercero.</li><li>Puntos notables no alineados: Ortocentro, baricentro, circuncentro e incentro en posiciones distintas.</li></ol>',
    theorems: '<ul><li>Suma de ángulos interiores: 180°.</li><li>Teorema del valor medio: mediana divide área en proporciones específicas.</li><li>Criterios de congruencia: Lado-Lado-Lado (LLL), Lado-Lado-Ángulo (LLA).</li></ul>'
    },

  rectangulo: {
    name: 'Triángulo Rectángulo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Right_triangle.svg/200px-Right_triangle.svg.png',
    definition: 'Un triángulo que tiene un ángulo interno de 90°.',
    properties: 'Un ángulo recto; Teorema de Pitágoras: a² + b² = c²; Circuncentro en el punto medio de la hipotenusa.',
    axioms: '<ol><li>Un ángulo recto (90°) y dos agudos (<90°).</li><li>La hipotenusa es el lado más largo y opuesto al ángulo recto.</li><li>Las medianas cumplen propiedades específicas (ej: la mediana a la hipotenusa mide la mitad de esta).</li></ol>',
    theorems: '<ul><li>Teorema de Pitágoras: a² + b² = c².</li><li>Altura desde el ángulo recto: relaciona segmentos de hipotenusa.</li><li>Relaciones trigonométricas: seno, coseno y tangente.</li></ul>'
    },

  acutangulo: {
    name: 'Triángulo Acutángulo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Acute_triangle.svg/200px-Acute_triangle.svg.png',
    definition: 'Un triángulo donde los tres ángulos internos son menores de 90°.',
    properties: 'Todos los ángulos agudos; Circuncentro y ortocentro dentro del triángulo.',
    axioms: 'La suma de dos lados cualesquiera es mayor al tercero (a + b > c).',
    theorems: '<ul><li>Suma de ángulos: 180°.</li><li>Propiedades de ortocentro y circuncentro.</li><li>Leyes del seno y del coseno.</li></ul>'
    },

  cuadrado: {
    name: 'Cuadrado',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Square_-_blue.svg/200px-Square_-_blue.svg.png',
    definition: 'Cuadrilátero regular con cuatro lados y ángulos iguales.',
    properties: 'Lados iguales; Ángulos de 90°; Diagonales iguales y perpendiculares; Simetría axial y rotacional.',
    axioms: '<ol><li>4 lados iguales y 4 ángulos rectos (90°).</li><li>Lados opuestos paralelos (es un paralelogramo).</li><li>Diagonales iguales, perpendiculares y se bisecan.</li></ol>',
    theorems: '<ul><li>Suma de ángulos interiores: 360°.</li><li>Área = lado².</li><li>Las diagonales se bisecan y son perpendiculares.</li></ul>'
    },

  rectangulo_cuad: {
    name: 'Rectángulo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Rectangle.svg/200px-Rectangle.svg.png',
    definition: 'Cuadrilátero con cuatro ángulos rectos y lados opuestos iguales.',
    properties: 'Lados opuestos iguales; Diagonales iguales; Ángulos de 90°.',
    axioms: '<ol><li>4 ángulos rectos (90°).</li><li>Lados opuestos iguales y paralelos.</li><li>Diagonales iguales y se bisecan (cortan en su punto medio).</li></ol>',
    theorems: '<ul><li>Área = base x altura.</li><li>Diagonales se bisecan.</li><li>Paralelogramo con un ángulo recto es rectángulo.</li></ul>'
    },

  rombo: {
    name: 'Rombo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Rhombus.svg/200px-Rhombus.svg.png',
    definition: 'Cuadrilátero con los cuatro lados de igual longitud, pero sin ángulos rectos.',
    properties: 'Lados iguales; Diagonales perpendiculares; Diagonales se bisecan; Ejes de simetría.',
    axioms: '<ol><li>4 lados iguales (es un paralelogramo equilátero).</li><li>Lados opuestos paralelos y ángulos opuestos iguales.</li><li>Diagonales perpendiculares que se bisecan (cortan en ángulo recto).</li><li>Diagonales bisectrices de los ángulos internos.</li><li>2 ejes de simetría (coinciden con sus diagonales).</li></ol>',
    theorems: '<ul><li>Área = (D·d)/2 donde D y d son diagonales.</li><li>Suma de ángulos interiores: 360°.</li></ul>'
    },

  romboide: {
    name: 'Romboide',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Parallelogram.svg/200px-Parallelogram.svg.png',
    definition: 'Cuadrilátero con lados opuestos iguales y paralelos, pero sin ángulos rectos.',
    properties: 'Lados opuestos paralelos e iguales; Ángulos opuestos iguales; Diagonales se bisecan.',
    axioms: '<ol><li>Lados opuestos iguales y paralelos (como todo paralelogramo).</li><li>Ángulos opuestos iguales (no son rectos).</li><li>Diagonales desiguales que se bisecan (se cortan en su punto medio).</li><li>No tiene ejes de simetría (a diferencia del rombo o rectángulo).</li><li>Ángulos consecutivos son suplementarios (suman 180°).</li></ol>',
    theorems: '<ul><li>Área = base x altura.</li><li>Suma de ángulos: 360°.</li><li>Un par de lados opuestos iguales y paralelos implica romboide.</li></ul>'
    },

  trapecio: {
    name: 'Trapecio',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Trapezoid.svg/200px-Trapezoid.svg.png',
    definition: 'Cuadrilátero con al menos un par de lados paralelos.',
    properties: 'Una base mayor y una menor; Los lados no paralelos son oblicuos.',
    axioms: '<ol><li>1 par de lados paralelos (llamados bases).</li><li>Ángulos adyacentes a cada base son suplementarios (suman 180°).</li><li>Puede ser:<ul><li>Escaleno: todos sus lados desiguales</li><li>Isósceles: lados no paralelos iguales</li><li>Rectángulo: con 2 ángulos rectos</li></ul></li><li>La mediana (segmento entre puntos medios de lados no paralelos) es paralela a las bases y mide la mitad de su suma.</li></ol>',
    theorems: '<ul><li>Área = ((base mayor + base menor) x altura)/2.</li><li>Suma de ángulos interiores = 360°.</li></ul>'
    },

  trapecio_isoceles: {
    name: 'Trapecio Iso',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Trapezoid.svg/200px-Trapezoid.svg.png',
    definition: 'Cuadrilátero con al menos un par de lados paralelos.',
    properties: 'Una base mayor y una menor; Los lados no paralelos son oblicuos.',
    axioms: '<ol><li>1 par de lados paralelos (bases) y 1 par de lados no paralelos congruentes (igual longitud).</li><li>Ángulos adyacentes a cada base son congruentes (igual medida).</li><li>Diagonales congruentes (igual longitud).</li><li>Eje de simetría vertical (si se dibuja perpendicular a las bases).</li><li>Ángulos adyacentes a cada base son suplementarios (suman 180°).</li></ol>',
    theorems: '<ul><li>Área = ((base mayor + base menor) x altura)/2.</li><li>Suma de ángulos interiores = 360°.</li></ul>'
    },

  };