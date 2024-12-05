import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { Component } from '@angular/core';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
{
    path:"",
    component:HomeComponent
},
{
    path:"home",
    component:HomeComponent

},
{
    path:"edit/:id",
    component:EditComponent

},
{
    path:"details/:id",
    component:DetailsComponent

},
{
    path:"delete/:id",
    component:DeleteComponent

},

{
    path:"create",
    component:CreateComponent

}
];
