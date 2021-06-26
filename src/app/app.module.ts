import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { SortByPipe } from './common/pipes/sort-by.pipe';
import { ReadPopulationPipe } from './common/pipes/read-population.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TreeNodeComponent,
    SortByPipe,
    ReadPopulationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
