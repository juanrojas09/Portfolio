import { Component } from '@angular/core';
import { Skill } from 'src/app/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermedio',
      rating: 80,
    },
    {
      name: 'ASP.NET Core, EF Core,C#',
      level: 'Avanzado',
      rating: 85,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermedio',
      rating: 70,
    },
    {
      name: 'JAVA,Spring Boot',
      level: 'Intermedio',
      rating: 60,
    },
    {
      name: 'C++',
      level: 'Intermedio',
      rating: 80,
    },
    {
      name: 'SQL Server',
      level: 'Intermedio',
      rating: 70,

    },
    {
      name: 'GIT',
      level: 'Intermedio',
      rating: 70,
    },
    {
      name: 'Python',
      level: 'Basico',
      rating: 50,
    },
    {
      name: 'Docker',
      level: 'Basico',
      rating: 50,
    },
    {
      name: 'CI/CD',
      level: 'Basico',
      rating: 50,
    },

  ];
}
