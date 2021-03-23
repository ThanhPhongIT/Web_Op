import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from '../layout/layout.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [HomeComponent, LayoutComponent, PagesComponent, BlogComponent, ContactComponent],
  imports: [
    CommonModule, PagesRoutingModule, RouterModule, NzGridModule, NzIconModule, SwiperModule
  ],
  
})
export class PagesModule { }
