import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { CrudoptableComponent } from './crudoptable/crudoptable.component';
import { EmpregisterComponent } from './empregister/empregister.component';
import {Routes, RouterModule} from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes =[
  {
    path:"",
    redirectTo:'tableedits',
    pathMatch:'full'
    
  },
  // {
  //   path:"employees",
  //   component:DisplayEmployeesComponent
    
  // },
  {
  path:'register',
  component:EmpregisterComponent
},
{
  path:'editUser/:id',
  component:EditUserComponent
},
{
  path:"tableedits",
  component:CrudoptableComponent
}

]




@NgModule({
  declarations: [
    AppComponent,
    CrudoptableComponent,
    EmpregisterComponent,
    EditUserComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

