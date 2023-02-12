import { Component } from '@angular/core';
import { WorkExperience } from 'src/app/models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Desarrollador Fullstack',
      company: 'Encode SA',
      duration: 'Octubre 2022 - Now',
      description: [
        'Encargado de desarrollar nuevos requerimeintos, funcionalidades, dar soporte y mantenimiento a proyectos, corregir bugs, tanto del lado del cliente como del servidor',
        'Desarrollo de aplicaciones web, utilizando tecnologias como Angular, ASP.NET Core, EF Core, SQL Server, HTML, CSS, JS,C#'
      ],
    },
    {
      role: 'Pasante de Desarrollador .NET',
      company: 'Globant',
      duration: 'Marzo 2022- Aug 2022',
      description: [
        'Pasante de desarrollador de .NET, donde me capacitaron en las tecnologias y flujos que manejaba la empresa.',
        
      ],
    },
    {
      role: 'Desarrollador',
      company: 'ONE-RIG',
      duration: 'Marzo 2021- marzo 2022',
      description: [
        'Emprendimiento realizado en el boom de la mineria.',
        'Mi actividad principal era desarrollar y dar mantenimiento a una landing page.',
        'Tambien me encargaba de armar y dar soporte, mantenimeinto a rigs de mineria, armados a medida.',
      ],
    },
  ];
}
