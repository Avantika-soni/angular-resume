import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  MyData: string[][]=[
  ['Name','Avantika Soni'],
  ['DOB','21/10/2001'],
  ['Work Experience','2.2 years'],
  ['Education','btech graduate'],
  
  ];
  AboutMe: string[]= ['Versatile Front-End Developer with 2 years of experience, demonstrating a proven track record in delivering customized solutions for diverse clients. Working in HTML, CSS, JavaScript, Bootstrap, TypeScript, Angular dedicated to appealing web applications. Possessing extensive knowledge in web development, I am eager to contribute my creativity and technical expertise to innovative projects in a collaborative environment.'
];
  constructor() { }

  ngOnInit(): void {
  }

}
