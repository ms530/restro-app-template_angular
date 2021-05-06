import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturedFoodComponent } from './featured-food/featured-food.component';
import { ChefsComponent } from './chefs/chefs.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FeaturedFoodComponent,
    ChefsComponent,
    SocialFeedComponent,
    OurProductsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
