import { NgModule } from '@angular/core';

import { StringPipesModule } from './pipes/string';
import { ObjectPipesModule } from './pipes/object';

@NgModule({
  exports: [
    StringPipesModule,
    ObjectPipesModule
  ]
})
export class PipesFiltersModule {}


export * from './pipes/string';
export * from './pipes/object';
