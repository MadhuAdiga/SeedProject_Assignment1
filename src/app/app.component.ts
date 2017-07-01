import { Component } from '@angular/core';//Import Component

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><br>
            <h2> SeedProject : Assignment1 </h2>
            <p><b>Problem Statement: </b> Create setup for any Angular 2 Application with following given Technology stack.

              ● Angular 2

              ● Gulp

              ● Jasmine

              ● Karma

              ● SASS

              ● Typescript

              ● Webpack

              ● Webpack Development Server</p>`,
})


export class AppComponent  { name = 'Angular'; }
