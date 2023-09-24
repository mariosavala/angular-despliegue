import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { AddcharacterComponent } from './components/addcharacter/addcharacter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPagesComponent,
    ListComponent,
    AddcharacterComponent
  ],
  exports:[
    MainPagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbzModule { }
