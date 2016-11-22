import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}<h1><h2>My name is: {{myName}}<h2>'
})
export class AppComponent  {
    title = 'Angular2 Demo';
    myName = 'Shem';
}