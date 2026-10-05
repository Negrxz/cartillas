const PRODUCTOS = [
 {
  "marca": "Millanel",
  "cod": "01536051",
  "nombre": "Eau de parfum pour femme Zahira White",
  "desc": "Cont. neto: 100 ml FLORAL GOURMAND Jazmín, durazno, caramel, ámbar patchouli y sándalo. Equivalencia de Yara Moi de Lattafa alta INTENSIDAD OCASIÓN DE USO todos los días",
  "precio": 41900,
  "pag": 3,
  "img": "images/p1.jpg",
  "id": "p1"
 },
 {
  "marca": "Millanel",
  "cod": "80250051",
  "nombre": "Box Zahira White",
  "desc": "NUEVO SET REGALABLE ZAHIRA BOX El regalo de una esencia inolvidable Hay regalos que se abren... y otros que se recuerdan para CONTIENE siempre. El Box Zahira White fue pensado para homenajea",
  "precio": 12900,
  "pag": 5,
  "img": "images/p2.jpg",
  "id": "p2"
 },
 {
  "marca": "Millanel",
  "cod": "16103504",
  "nombre": "Serum para Rostro Nova Skin+",
  "desc": "SERUM PARA ROSTRO Pensado para revelar tu mejor piel Sumá a tu rutina el serum para rostro Nova Skin+, una emulsión ligera de uso diario pensada para acompañar el cuidado facial con una sens",
  "precio": 12990,
  "pag": 7,
  "img": "images/p3.jpg",
  "id": "p3"
 },
 {
  "marca": "Millanel",
  "cod": "16103501",
  "nombre": "Aceite desmaquillante Nova Skin+",
  "desc": "ACEITE DESMAQUILLANTE El lujo de una piel limpia Fórmula de textura suave y envolvente que remueve maquillaje e impurezas, dejando la piel limpia, nutrida y confortable. Con aceite de moring",
  "precio": 11990,
  "pag": 8,
  "img": "images/p4.jpg",
  "id": "p4"
 },
 {
  "marca": "Millanel",
  "cod": "16103503",
  "nombre": "Crema para rostro Nova Skin+",
  "desc": "CREMA PARA ROSTRO Despertá la mejor versión de tu piel Fórmula con centella asiática y bakuchiol pensada para acompañar el cuidado diario de la piel con una sensación suave, confortable y re",
  "precio": 16990,
  "pag": 9,
  "img": "images/p5.jpg",
  "id": "p5"
 },
 {
  "marca": "Millanel",
  "cod": "50530286",
  "nombre": "Neceser Nova",
  "desc": "• Medidas: 20 x 15 cm. • Base de 6 cm • Material: PVC y cordura sublimada.",
  "precio": 14900,
  "pag": 10,
  "img": "images/p6.jpg",
  "id": "p6"
 },
 {
  "marca": "Millanel",
  "cod": "16103502",
  "nombre": "Crema corporal Nova Skin+",
  "desc": "CREMA CORPORAL Cuidado corporal que transforma tu piel Formulada con bakuchiol, centella reversa, vitamina E y manteca de karité, pensada para nutrir, regenerar y mejorar la apariencia de la",
  "precio": 24990,
  "pag": 11,
  "img": "images/p7.jpg",
  "id": "p7"
 },
 {
  "marca": "Millanel",
  "cod": "01536047",
  "nombre": "Eau de parfum pour femme Zahira Fruity Sweet",
  "desc": "CONCENTRACIÓN DE ESENCIA Creado para mujeres que viven con el corazón, que se dejan llevar por sus emociones y disfrutan ser auténticas. Mujeres que aman los gestos simples, PACKAGING DE LUJ",
  "precio": 41900,
  "pag": 15,
  "img": "images/p8.jpg",
  "id": "p8"
 },
 {
  "marca": "Millanel",
  "cod": "01536045",
  "nombre": "Cofre Zahira & Zahira Candy",
  "desc": "Un estuche premium que reúne dos perfumes femeninos pensados para acompañar cada versión de vos: una más intensa y sofisticada, otra más dulce CONCENTRACIÓN y luminosa. Un regalo exquisito p",
  "precio": 36900,
  "pag": 17,
  "img": "images/p9.jpg",
  "id": "p9"
 },
 {
  "marca": "Millanel",
  "cod": "01536033",
  "nombre": "Eau de parfum pour femme Amber",
  "desc": "Eau de parfum Un encuentro entre lo audaz y lo delicado. Las notas Cont. neto: 100 ml especiadas se abren camino hacia un corazón vibrante, FLORAL ESPECIADA un fondo dulce",
  "precio": 46900,
  "pag": 18,
  "img": "images/p10.jpg",
  "id": "p10"
 },
 {
  "marca": "Millanel",
  "cod": "01536041",
  "nombre": "Eau de parfum sin género Aura Pura",
  "desc": "Una explosión de cítricos mediterráneos acaricia la piel como un soplo de frescura sensual. En su corazón, frutas exóticas y jugosas se despliegan suavemente, dulces y tentadoras, mientras u",
  "precio": 46900,
  "pag": 19,
  "img": "images/p11.jpg",
  "id": "p11"
 },
 {
  "marca": "Millanel",
  "cod": "01536021",
  "nombre": "Eau de parfum pour femme Scarlet",
  "desc": "La fusión perfecta entre lo delicado y lo femenino. En cada gota, un susurro de la naturaleza, un soplo de energía, una chispa de seducción. Su poderoso corazón de notas florales te envolver",
  "precio": 31500,
  "pag": 20,
  "img": "images/p12.jpg",
  "id": "p12"
 },
 {
  "marca": "Millanel",
  "cod": "01536043",
  "nombre": "Eau de parfum pour femme Jardín Secreto",
  "desc": "Un perfume que celebra la frescura, la espontaneidad y la feminidad natural. CONCENTRACIÓN Su aroma combina notas verdes y DE ESENCIA florales que transmiten ligereza y vitalidad, evocando u",
  "precio": 31500,
  "pag": 21,
  "img": "images/p13.jpg",
  "id": "p13"
 },
 {
  "marca": "Millanel",
  "cod": "01536024",
  "nombre": "Eau de parfum pour femme Glamorosa",
  "desc": "El perfume de quienes no piden permiso para brillar. Un aroma voluptuoso con toques de miel, flores y misterio, que envuelve y domina. Para la mujer que no pasa desapercibida, incluso cuando",
  "precio": 31500,
  "pag": 22,
  "img": "images/p14.jpg",
  "id": "p14"
 },
 {
  "marca": "Millanel",
  "cod": "01536017",
  "nombre": "Bella Vita Floral",
  "desc": "Descubrí Bella Vita Floral, una fragancia floral frutal que combina notas frescas y dulces con un fondo cálido y envolvente. Un aroma femenino y encantador, pensado CONCENTRACIÓN para una mu",
  "precio": 31500,
  "pag": 23,
  "img": "images/p15.jpg",
  "id": "p15"
 },
 {
  "marca": "Millanel",
  "cod": "01536018",
  "nombre": "Party Woman Rosé",
  "desc": "Inspirado en el espíritu sofisticado y glamoroso de la mujer moderna, auténtica, segura de sí misma y con una CONCENTRACIÓN presencia magnética, que disfruta de cada momento con estilo y nat",
  "precio": 31500,
  "pag": 24,
  "img": "images/p16.jpg",
  "id": "p16"
 },
 {
  "marca": "Millanel",
  "cod": "01536023",
  "nombre": "Eau de parfum pour femme Pink",
  "desc": "Un perfume que celebra a las mujeres DELUXE sexys, elegantes y vanguardistas. Perfecta para quienes desean irradiar confianza, EDITION belleza y sensualidad, dejando su huella en cada paso. ",
  "precio": 31500,
  "pag": 25,
  "img": "images/p17.jpg",
  "id": "p17"
 },
 {
  "marca": "Millanel",
  "cod": "01536029",
  "nombre": "Eau de parfum pour femme So Good Premier",
  "desc": "Un manifiesto olfativo para los espíritus indomables que eligen vivir bajo sus propias reglas. Con un carácter audaz y seductor, So Good Premier se convierte en el aliado perfecto para las a",
  "precio": 31500,
  "pag": 26,
  "img": "images/p18.jpg",
  "id": "p18"
 },
 {
  "marca": "Millanel",
  "cod": "01536019",
  "nombre": "Eau de parfum pour femme So Good",
  "desc": "Creado para mujeres elegantes, sexys y audaces, que no temen mostrar su lado más femenino y cautivador. Su aroma sofisticado y envolvente deja una huella inolvidable, reflejando la fuerza y ",
  "precio": 31500,
  "pag": 27,
  "img": "images/p19.jpg",
  "id": "p19"
 },
 {
  "marca": "Millanel",
  "cod": "05307208",
  "nombre": "N˚ 208 Alternativa olfativa de Invictus Aqua de Rabanne",
  "desc": "FRESCURA Y PROTECCIÓN PARA TODOS LOS DÍAS AMADERADA OZÓNICA Pomelo, hojas de violeta, notas ozónicas, notas marinas, violeta, notas de madera, ámbar gris y amberwood. TA 1 ANTITRANSPIRANTE 1",
  "precio": 10990,
  "pag": 53,
  "img": "images/p20.jpg",
  "id": "p20"
 },
 {
  "marca": "Millanel",
  "cod": "01536044",
  "nombre": "Eau de parfum pour homme Afrodisíaco",
  "desc": "Audaz y magnético, combina frescura con una profundidad cálida CONCENTRACIÓN que seduce lentamente. DE ESENCIA Es el aroma del hombre provocador, amante de la libertad. PACKAGING DE LUJO Eau",
  "precio": 31500,
  "pag": 64,
  "img": "images/p21.jpg",
  "id": "p21"
 },
 {
  "marca": "Millanel",
  "cod": "01536026",
  "nombre": "Eau de parfum pour homme Poderoso",
  "desc": "Diseñado para hombres que irradian confianza, potencia y elegancia. Combina la fuerza bruta con una sofisticación única, capturando el equilibrio perfecto entre intensidad y estilo. Eau de p",
  "precio": 31500,
  "pag": 65,
  "img": "images/p22.jpg",
  "id": "p22"
 },
 {
  "marca": "Millanel",
  "cod": "50530272",
  "nombre": "Espejo Maquillador con Luz Led",
  "desc": "Espejo maquillador CON LUZ LED Funciona con 4 pilas AAA (no incluidas) Medidas: 17.5 x 29 cm (cerrado). Aumentos: 1X, 2X y 3X. Voltaje: 6V. Potencia: 1.44 W. Con interruptor táctil inteligen",
  "precio": 29900,
  "pag": 115,
  "img": "images/p23.jpg",
  "id": "p23"
 },
 {
  "marca": "Millanel",
  "cod": "50530166",
  "nombre": "Modelador para cabello 5 en 1",
  "desc": "MODELADOR PARA CABELLO 5 en 1 Permite modelar, alisar, dar volumen y definir rizos Cepillo secador para cabello con 5 cabezales intercambiables. Con efecto antiestático. Reduce el frizz. CON",
  "precio": 59900,
  "pag": 119,
  "img": "images/p24.jpg",
  "id": "p24"
 },
 {
  "marca": "Millanel",
  "cod": "43806093",
  "nombre": "Juego de sábanas 21/2 plazas Rosee",
  "desc": "Material: 50% algodón • 50% poliéster HILOS",
  "precio": 64900,
  "pag": 134,
  "img": "images/p25.jpg",
  "id": "p25"
 }
];
