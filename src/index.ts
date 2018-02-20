import { NgModule } from '@angular/core';

import { StringPipesModule } from './pipes/string';

@NgModule({
  exports: [
    StringPipesModule
  ]
})
export class PipesFiltersModule {}


export * from './pipes/string';
