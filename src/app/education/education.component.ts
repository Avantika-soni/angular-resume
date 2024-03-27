import { Component, OnInit } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { Education } from 'src/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      course:'Btech',
      institute: 'poornima college of eng.',
      duration: '2018-2022',
      score: '7.8 cgpa'
    },

    {
      course:'secondry high school',
      institute: 'st josephs',
      duration: '2015-2018',
      score: '70%'
    },
    
    {
      course:'high school',
      institute: 'st josephs',
      duration: '2014-2015',
      score: '79%'
    }
    
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
