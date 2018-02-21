import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {addemployeedetails} from './book.model';

@Component({
  selector: 'EMPLOYEEDETAILS',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 title = "add emp";
  model= new addemployeedetails();



  
  constructor () {
    
  }
ngOnInit() {}



}
