import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App root
import { AppComponent } from './app.component';

// Feature Modules
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
