import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {AngularFireModule} from "@angular/fire/compat";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {environment} from "../environments/environment.prod";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { CategoriesComponent } from './categories/categories.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllPostesComponent } from './posts/all-postes/all-postes.component';
import { NewPostComponent } from './posts/new-post/new-post.component';


@NgModule({
  /*in this declaration we declare the Components */
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashbordComponent,
    CategoriesComponent,
    AllPostesComponent,
    NewPostComponent,

  ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        ReactiveFormsModule,

    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
