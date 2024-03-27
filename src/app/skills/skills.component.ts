import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/models/models';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList: Skill[] = [
    {
     name:'Angular'
    },
    {
      name:'HTML'
     },
     {
      name:'Css'
     },
     {
      name:'JavaScript'
     },
     {
      name:'TypeScript'
     },
     {
      name:'SQL'
     },
     {
      name:'Bootstrap'
     },
     {
      name:'Github'
     },     {
      name:'VS Code'
     },     {
      name:'Ajax'
     },    
     {
      name:'Json'
     },     {
      name:'MVC'
     },     {
      name:'Web Development'
     },     {
      name:'Angular Material'
     },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
