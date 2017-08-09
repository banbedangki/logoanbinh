import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { DesignComponent } from './design/design.component';
import { ConstructionComponent } from './construction/construction.component';



@NgModule({
  declarations: [
    AppComponent,
    IntroduceComponent,
    DesignComponent,
    ConstructionComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
