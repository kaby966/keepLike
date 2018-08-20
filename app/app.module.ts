import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagesComponent } from './pages/pages.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes:Routes=[
{path:'home',component:HomeComponent},
{path:'events',component:EventsComponent},
{path:'blog',component:BlogComponent},
{path:'gallery',component:GalleryComponent},
{path:'contactus',component:ContactusComponent},
{path:'pages',component:PagesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    BlogComponent,
    GalleryComponent,
    ContactusComponent,
    PagesComponent
   ],
  imports: [
   BrowserModule,
   FormsModule,
  RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
