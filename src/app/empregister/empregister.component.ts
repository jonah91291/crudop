import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})

@Injectable()

export class EmpregisterComponent implements OnInit {
  title = "Add New Employee";
  model= new addemployeedetails();
  users = [];
  constructor(private http:Http,private router : Router) { 
}

  ngOnInit() {
  }

  

  register()
  {
    
    console.log("hello");
    console.log(this.model);
    this.users = [];
    var redirect = this;
    var model = JSON.parse(JSON.stringify(this.model));
    this.http.post("http://localhost:3000/users",model).subscribe(function(d){
      console.log("data",d)
      redirect.router.navigate(['/tableedits']);
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
