import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {DocumentsListComponent} from './documents/document.component';
import {ReportsListComponent} from './reports/reports.component';
import { DocumentDetailComponent } from './documents/document-detail.component';

const routes: Routes=[
    {path:'documents',component:DocumentsListComponent},
    {path:'reports',component:ReportsListComponent},
    {path:'documents/:id',component:DocumentDetailComponent}
];

@NgModule({
    imports: [
          RouterModule.forRoot(routes)
    ],
    exports: [
          RouterModule
    ]
})

export class AppRoutingModule{}
export const routingComponent=[DocumentsListComponent,ReportsListComponent,DocumentDetailComponent]