import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { TablePrototypeComponent } from './table-prototype/table-prototype.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    ErrorComponent,
    TablePrototypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
