import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
@Component({
  selector: 'app-crudoptable',
  templateUrl: './crudoptable.component.html',
  styleUrls: ['./crudoptable.component.css']
})
export class CrudoptableComponent implements OnInit {

  constructor(private http:Http) { 
  }
  

  ngOnInit() {
    this.http.get("http://localhost:3000/users").subscribe(function(d){
      console.log("data",d)
    })
  }

  editData(std)
  {

  }


  delData(std)
  {

  }


  
}
