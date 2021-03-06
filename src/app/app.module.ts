import { StocksService } from './services/stocks.service';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { ManageComponent } from './components/manage/manage.component';
@NgModule({
declarations: [
AppComponent,
SummaryComponent,
DashboardComponent,
ManageComponent
],
imports: [
BrowserModule,
HttpClientModule
AppRoutes],
providers: [StocksService],
bootstrap: [AppComponent]
})
export class AppModule { }