import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { HttpModule }   from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
    imports:      [ BrowserModule, HttpModule, ChartsModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }