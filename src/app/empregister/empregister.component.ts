import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {
  title = "Add New Employee";
  model= new addemployeedetails();
  users = [];
  constructor(private http:Http) { 
}

  ngOnInit() {
  }

  

  register()
  {
    
    console.log("hello");
    console.log(this.model);
    this.users = [];
    var model = JSON.parse(JSON.stringify(this.model));
    this.http.post("http://localhost:3000/users",model).subscribe(function(d){
      console.log("data",d)
    })
   // this.users.push(model);
    this.model = new addemployeedetails();

    
  }
}
class addemployeedetails{
  
  public EID: number;
  public ENAME: string;
  public ESALARY: number;
  public EJDATE: number;
  //public addNewDetail(){}
  
}
