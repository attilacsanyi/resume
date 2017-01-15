// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    // Angular
    CommonModule,

    // Material
    MaterialModule.forRoot(),

    // Flex Layout
    FlexLayoutModule.forRoot()
  ],
  declarations: [],
  exports: [
    // Angular
    CommonModule, RouterModule,

    // Material
    MaterialModule,

    // Flex Layout
    FlexLayoutModule,

    // Shared
  ],
  providers: []
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}
