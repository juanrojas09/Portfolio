import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner/baner.component';
import { BanerModule } from './baner/baner.module';
import { ContactModule } from './contact/contact.module';
import { DirectivesModule } from './directives/directives.module';
import { EducationModule } from './education/education.module';
import { PersonalInformationModule } from './personal-information/personal-information.module';
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from './skills/skills.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BanerModule,
        ContactModule,
        DirectivesModule,
        EducationModule,
        PersonalInformationModule,
        ProjectsModule,
        SkillsModule,
        WorkExperienceModule,
        ProjectsModule,
        SkillsModule,
        WorkExperienceModule,
        NavbarModule

       
    ]
})
export class AppModule { }
