import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent
    //UserlistComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
