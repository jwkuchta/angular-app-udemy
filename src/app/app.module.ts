// this is where we tell angular which pieces belong to our app
// we import the following package for the input to update dynamicly 
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ManualComponent } from './manual/manual.component';

// we add new modules to this array
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ManualComponent
  ],
  // we add the new import to our imports array
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // lists all components that Angular needs to know about when it analyzes index.html file
  // we reference our AppComponent (all app.component files)
  bootstrap: [ AppComponent ]
})
export class AppModule { }
