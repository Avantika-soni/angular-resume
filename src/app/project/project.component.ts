import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/models';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
projectsList : Project[] = [
  {
    title: 'Web Development',
    technologies: 'Angular',
    description:'it is a projjnvj lorem()'

  },
  {
    title: 'Web Development',
    technologies: 'Angular',
    description:'it is a projjnvj'

  },
  {
    title: 'Web Development',
    technologies: 'Angular',
    description:'it is a projjnvj'

  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
