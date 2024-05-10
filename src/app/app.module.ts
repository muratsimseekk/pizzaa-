import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { HeaderComponent } from './components/order/header/header.component';
import { ContentComponent } from './components/order/content/content.component';
import { FormdetailComponent } from './components/order/content/formdetail/formdetail.component';
import { FormsModule } from '@angular/forms';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { HomeContentComponent } from './components/home/home-content/home-content.component';
import { FooterComponent } from './components/home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    HeaderComponent,
    ContentComponent,
    FormdetailComponent,
    HomeHeaderComponent,
    HomeContentComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
