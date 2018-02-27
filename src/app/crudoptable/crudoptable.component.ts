import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


export class CrudoptableComponent implements OnInit {
title="test";
users=[]
  constructor(private http:Http,private router :Router) { 
    this.getDetails();
  }
  
  ngOnInit() {
    
  } 

  editData(obj){
    
    this.router.navigate(['/editUser/'+obj.id]);
  }

  delData(y){
    var self = this;
    this.http.delete("http://localhost:3000/users/"+y).subscribe(function(d){
      console.log("data",d)
      self.getDetails();
    })
   
  }

  getDetails(){
    this.http.get("http://localhost:3000/users").map((response: Response)=> response.json()).subscribe(q=>{
      this.users=q;
      console.log("q",q)
    })
  }
}