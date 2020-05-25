import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-st-register',
  templateUrl: './st-register.component.html',
  styleUrls: ['./st-register.component.css']
})
export class StRegisterComponent implements OnInit {

  student: Student = new Student("","","","","")
  constructor(private studentService: StudentService) { }
  message: String;
  ngOnInit(): void {
  }

  register()
  {
    this.studentService.register(this.student)
    .subscribe((data)=>this.message = data.toString());
  }

}
