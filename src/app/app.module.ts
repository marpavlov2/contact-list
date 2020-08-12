import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllContactsComponent,
    MyFavoritesComponent,
    EditContactComponent,
    AddContactComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
