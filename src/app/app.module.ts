import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Home1Component } from './home1.component';
import { Home2Component } from './home2.component';
import { Home3Component } from './home3.component';
import { Home4Component } from './home4.component';
import { Home5Component } from './home5.component';
import { Home6Component } from './home6/home6.component';
import { Home7Component } from './home7/home7.component';
import { Home8Component } from './components/home8/home8.component';
import { Home9Component } from './components/home9/home9.component';
import { EmployeeComponent } from './employee/employee.component';

// decorator @NgModule
/*{
  declarations: [
       registertation of components happens here
       wihtout atleast one module registation component will not be loaded in angular projects
  ],
  imports: [
     when our project wants additonal modules due to functional requiremnts 
  ],
  providers: [
    add data distributers for your module e.g. services,interceptors
  ],
  bootstrap: [
    // only appears in one module you cannot have multiple boostraping module
  ]
}
*/

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    Home5Component,
    Home6Component,
    Home7Component,
    Home8Component,
    Home9Component,
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule{ }
