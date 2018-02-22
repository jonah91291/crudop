import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Injectable } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
id;
users;
  constructor(private http:Http, private activatedRoute: ActivatedRoute, private router: Router) {
    var self=this;
    //var id;
    this.activatedRoute.params.subscribe((params: Params) => {
      self.id = params['id'];
      console.log(self.id);
    });
    console.log("user Id",this.id);
    
  }

  ngOnInit() {
    this.http.get("http://localhost:3000/users/"+this.id).map((response: Response)=> response.json()).subscribe(q=>{
      this.users=q;
      console.log("q",q)
    })
  }

  update(model){
    var self = this;
    this.http.put("http://localhost:3000/users/"+model.id,model).subscribe(function(d){
      console.log("data",d)
      self.router.navigate(['/tableedits']);
    })
  }

}
