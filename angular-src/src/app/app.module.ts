import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BulletinScrollComponent } from './components/bulletin-scroll/bulletin-scroll.component';
import { PublishManifestoComponent } from './components/publish-manifesto/publish-manifesto.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes:Routes = [
  { path: 'bulletin_scroll', component: BulletinScrollComponent },
  { path: 'publish', component: PublishManifestoComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BulletinScrollComponent,
    PublishManifestoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
