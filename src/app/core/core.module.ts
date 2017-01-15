import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: [TitleComponent],
  exports: [TitleComponent],
  providers: []
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only!');
    }
  }
}
