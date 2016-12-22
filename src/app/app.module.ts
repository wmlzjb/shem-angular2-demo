import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { Ng2MaterialModule } from 'ng2-material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

import { LoginComponent } from './login';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        Ng2MaterialModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule { }
