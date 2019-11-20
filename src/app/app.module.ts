import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { appRoutes } from './routerCongif';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CoinService } from './coin.service';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
