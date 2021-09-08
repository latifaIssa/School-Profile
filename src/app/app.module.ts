import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./pages/home/home.component";
import { ClassesComponent } from "./components/classes/classes.component";
import { IgxCardModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from "igniteui-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClassesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IgxCardModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
