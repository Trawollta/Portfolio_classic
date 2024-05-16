import { AfterViewInit, Component } from '@angular/core';
import { PROJECTS } from '../projects.data';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Project {
  name: string;
  language: string;
  description: string;
  image: string;
  git: string;
  live: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
    
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  
  projects: Project[] = PROJECTS;

  ngAfterViewInit(): void {
    AOS.init();
  }
}
