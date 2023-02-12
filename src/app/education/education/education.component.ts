import { Component } from '@angular/core';
import { Education } from 'src/app/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "Universidad Catolica De Cordoba",
      course: 'Ingenieria en Sistemas',
      duration: '2019-2024',
      score: '75%',
    },
    {
      institute: 'Colegio Lasalle',
      course: 'Especialidad en Economia y gestion',
      duration: '2006-2018',
      score: '100%',
    },
  ];

}
