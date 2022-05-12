import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  datos:number=0;
  comics:Comic[] = [
  {
    nombre:"THE BRAVE AND THE BOLD - BATMAN Y WONDER WOMAN",
    img:"assets/imagenes/tienda/1.jpeg",
    index:0,
    info:"Batman se enfrenta a una amenaza sobrenatural en Gotham. En el barrio irlandés de la ciudad, las visiones de fantasmas y monstruos han llevado a los ciudadanos a un punto muerto. Cuando la evidencia vincula la amenaza espectral de Gotham con los eventos en Tír Na Nóg, el Caballero Oscuro no tiene más remedio que viajar a un mundo de mitos y magia que apenas logra comprender.",
  },
  {
    nombre:"Spiderman & Punisher",
    img:"assets/imagenes/tienda/9.jpeg",
    index:1,
    info:"Frank Castle dirige una organización criminal y Ben Reilly aprende a desenvolverse por las calles de una ciudad azotada por las guerras de bandas. Todo ha cambiado. ¿Serán capaces de combatir al villano Lápida sin matarse mutuamente?",
  },
  {
    nombre:"INJUSTICE 2",
    img:"assets/imagenes/tienda/2.jpeg",
    index:2,
    info:"Durante más de cinco años, el escritor Tom Taylor ha creado una épica historia que comenzó con una pregunta: ¿Qué pasaría si Superman se volviera malo? Y la respuesta es una de las historias más aclamadas en el Universo DC, que llega a su conclusión en esta espectacular edición… ¡Conectando directamente con los eventos del videojuego Injustice 2!",
  },
  {
    nombre:"THE MAN OF STEEL",
    img:"assets/imagenes/tienda/3.jpeg",
    index:3,
    info:"El Último Hijo de Krypton está a punto de conocer al némesis de su planeta natal. Un implacable asesino llamado Rogol Zaar ha llegado a la Tierra, trayendo consigo una estela de muerte y destrucción a gran escala. Sólo Superman y su prima, Supergirl, se interponen entre Zaar y la culminación de su misión: la aniquilación absoluta de la raza kryptoniana.",
  },
  {
    nombre:"Spiderman",
    img:"assets/imagenes/tienda/8.jpeg",
    index:4,
    info:"Han pasado dos años desde que el tranquilo Peter Parker dejó a Mary Jane Watson, su gran amor, y decidió seguir asumiendo sus responsabilidades como Spider-Man. Peter debe afrontar nuevos desafíos mientras lucha contra el don y la maldición de sus poderes equilibrando sus dos identidades: el escurridizo superhéroe Spider-Man y el estudiante universitario. Las relaciones con las personas que más aprecia están ahora en peligro de ser descubiertas con la aparición del poderoso villano de múltiples tentáculos Doctor Octopus, (Doc Ock)",
  },
  {
    nombre:"Spiderman & New Warriors",
    img:"assets/imagenes/tienda/10.jpeg",
    index:5,
    info:"Spiderman y los Nuevos Guerreros se adentran en el misterio que rodea las desapariciones de varios superhéroes, pero su investigación les lleva a más de lo que pueden manejar cuando son testigos de la resurrección de la poderosa Esfinge.",
  },
  {
    nombre:"JUSTICE LEAGUE",
    img:"assets/imagenes/tienda/4.jpeg",
    index:6,
    info:"La Liga de la Justicia es un equipo de superhéroes ficticios que aparecen en los cómics estadounidenses publicados por DC Comics.",
  },
  {
    nombre:"MERA - REINA DE ATLANTIS",
    img:"assets/imagenes/tienda/5.jpeg",
    index:7,
    info:"El Reino de la Atlantida se encuentra en una crisis severa, derivado del ascenso al trono de Rath, al cual Aquaman deberá derrotar para regresar a sus funciones como Rey de los Siete Mares. Mientras esta situación ocurre, las páginas de la serie regular de Aquaman contará por tres números con la presencia de una de las mujeres más poderosas del Universo DC, Mera.",
  },
  {
    nombre:"Biblioteca Marvel: Capitán Marvel",
    img:"assets/imagenes/tienda/6.jpeg",
    index:8,
    info:"El Capitán Marvel es el mejor guerrero del Imperio Kree…hasta que llegó a la Tierra. Esta maxiserie de 10 números ofrece, siguiendo con la filosofía de la Biblioteca Marvel, la colección clásica del personaje en la que podremos descubrir la vida y aventuras del guerrero Kree, al mismo tiempo que leeremos algunas de las mejores aventuras de Marvel",
  },
  {
    nombre:"Tarzán de los Monos",
    img:"assets/imagenes/tienda/7.jpeg",
    index:9,
    info:"Tras la muerte de Lord y Lady Greystoke, su hijo es adoptado por Kala dentro de una tribu de simios, en la que su nombre es Tarzán. Con su inteligencia y las enseñanzas de los simios se convertirá en el señor de la selva. Pero el descubrimiento de los hombres y la llegada de una joven blanca, alterará toda su existencia.",
  },
  {
    nombre:"X-Men",
    img:"assets/imagenes/tienda/11.jpeg",
    index:10,
    info:"La Patrulla-X se enfrenta a la élite asesina del Nido para defender a una de sus reinas que ha conseguido mantener su humanidad pese a la infección.",
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  dato(h:number){
    this.datos=h;
  }
}

interface Comic{
  nombre:string;
  img:string;
  index:number;
  info:string;
}