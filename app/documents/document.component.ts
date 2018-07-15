import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'app-document',
    template:`<h1>Documents List</h1>
              <ul class="items">
                 <li (click)="onSelect(document)" *ngFor="let document of documents">
                   <span class="badge">{{document.id}}</span>{{document.name}}
                 </li>
              </ul>`
})

export class DocumentsListComponent{
    constructor(private router:Router){}
    documents=[
        {"id":1,"name":"Angular"},
        {"id":2,"name":"React"},
        {"id":3,"name":"Java"},
    ]

    onSelect(document){
        this.router.navigate(['/documents',document.id]);
    }
}