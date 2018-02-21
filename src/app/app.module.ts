import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { CrudoptableComponent } from './crudoptable/crudoptable.component';
import { EmpregisterComponent } from './empregister/empregister.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes =[
  {
    path:"",
    redirectTo:'register',
    pathMatch:'full'
  },
  {
  path:'register',
  component:EmpregisterComponent
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
    EmpregisterComponent
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

