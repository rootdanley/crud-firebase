import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "./environments/environment";
import {ReactiveFormsModule} from "@angular/forms";
import { CreateComponent } from './create/create.component';
import { DeletarComponent } from './deletar/deletar.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeletarComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
