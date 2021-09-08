import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
   classes = [
    { "id": 0, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 1, "name": "الاول ب",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 2, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 3, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 4, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 5, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 6, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 7, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 8, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 5, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 6, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 7, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    { "id": 8, "name": "الاول أ",'studentsNum':23,'teacher':'عمر','data':'' },
    
      ];

  constructor() { }

  ngOnInit(): void {
  }


}
