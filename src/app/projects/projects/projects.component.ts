import { Component } from '@angular/core';
import { Project } from 'src/app/models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Gestor de Registro de Expedientes',
      technologies: 'Angular, Angular Material, C#,EF Core,.NET Framework',
      description: [
        'Proyecto desarrollado para poder brindar facilidad a aquellos abogados que trabajen sobre ciertos registros y puedan extraer de forma rapida y amigable informacion de ciertas personas. Sistema hecho a medida con retroalimentacion directa del cliente/usuario a interactuar con el sistema.',
        'Busca solucionar los problemas de formatos de cuadros que se le envian a los abogados y que estos puedan trabajar con estos datos de forma directa y comoda. '
      ],
    }
    ,
    {
      title: 'NFT Marketplace',
      technologies: 'HTML,CSS,Js,React.js,Next.js,Node.js,Express.js,Web3.js,ethers.js,Solidity',
      description: [
        'Proyecto basado en un marketplace de NFT, consolidando conocimientos en las tecnologias de blockchain y sus librerias, en este caso utilizamos, Solidity para los smart contract, librerias como ethers.js,web3, entre otras, para el lado del cliente usamos  HTML,CSS,JavaScript, frameworks como React.js y se utilizo Next.js.'
      ],
    },
    {
      title: 'Gestor de Inventarios',
      technologies: 'HTML,CSS,Js,Java,spring,hibernate',
      description: [
        'Mini proyecto recorriendo las bases de una FullStack App, la aplicacion consiste en llevar un conteo de ingresos y egresos y gestionarlos dentro de una base de datos, para poder llevar registro de un balance. Se aplico el Patron MVC (modelo vista controlador)'
      ],
    },
    {
      title: 'Gestor de Usuarios',
      technologies: 'HTML,CSS,Js,Java,spring,hibernate',
      description: [
        'Mini proyecto utilizando el patron MVC y aplicando varias dependencias utiles, el proyecto consiste en tener una gestion de usuarios, que tenga forma de registrarse y loguearse y una vista donde podamos ver la tabla con los usuarios pudiendolos eliminar cuando querramos, cabe aclarar que se uso Mysql para la gestion de la BD, Proyecto ampliable, se uso de JWT para las sesiones'
   
      ],
      },
    {
      title: 'DAPP IPFS',
      technologies: 'Solidity,JS,IPFS,Node.js',
      description: [
       'Se trata basicamente de una app descentralizada donde se suben archivos a IPFS, donde integrando las tecnologias que se nombraron al principio, se pudo entrelazar el contrato con un front-end y se pudo hacer de manera correcta el manejo de las transacciones por cada subida de archivo'
       
      ],
    }

  ];
}
