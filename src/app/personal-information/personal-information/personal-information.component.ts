import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Nombre', 'Juan Pablo Rojas'],
    ['Dia de nacimeinto', '25/01/2001'],
    ['Exp Laboral', '1 año'],
    ['Educacion', 'Ingenieria en Sistemas (UCC)'],
    ['Idiomas', 'Ingles Nivel tecnico-intermedio.'],
    
  ];

  aboutMe: string[] = [
   'Buenas!, me llamo Juan, actual estudiante avanzado de ingenieria en sistemas en la Universidad Catolica De Cordoba.'
   ,'me encuentro cursando mi 5to año de mi carrera, tambien actualmente estoy trabajando como fullstack developer en Encode SA. Me considero una persona dispuesta, responsable y proactiva,siempre trato de buscar la mejor solucion dentro de las diferentes propuestas que se me presentan, me gusta aprender cosas nuevas y me considero una persona con facilidad de adaptacion a diferentes ambientes de trabajo. Con ganas de seguir aprendiendo y creciendo profesionalmente.',
   
  ];

}
