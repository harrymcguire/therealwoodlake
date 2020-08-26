import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ContactComponent } from './contact/contact.component';
import { EpkComponent } from './epk/epk.component'; 



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: PicturesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'epk', component: EpkComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
