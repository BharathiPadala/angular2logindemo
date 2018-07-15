import {Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
    template:`<h1>We selected document is {{documentId}}</h1>
              <a (click)="goPrevious()">Previous</a>
              <a (click)="goNext()">Next</a>`
})

export class DocumentDetailComponent implements OnInit{
    public documentId;
    constructor(private route:ActivatedRoute,private router:Router){}
    /*ngOnInit(){
        let id=parseInt(this.route.snapshot.params['id']);
        this.documentId=id;
    }*/
    ngOnInit(){
        this.route.params.subscribe((params:Params)=>{
          let id = parseInt(params['id']);
          this.documentId=id;
        })
    }

    goPrevious(){
        let previousId=this.documentId-1;
        this.router.navigate(['/documents',previousId]);
    }

    goNext(){
        let nextId= this.documentId+1;
        this.router.navigate(['/documents',nextId]);
    }
}