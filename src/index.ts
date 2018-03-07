import { NgModule } from '@angular/core';

import { BooleanPipesModule } from './pipes/bool';
import { MathPipesModule } from './pipes/math';
import { ObjectPipesModule } from './pipes/object';
import { StringPipesModule } from './pipes/string';

@NgModule({
  exports: [
    BooleanPipesModule,
    MathPipesModule,
    ObjectPipesModule,
    StringPipesModule
  ]
})
export class PipesFiltersModule {}

export * from './pipes/bool';
export * from './pipes/math';
export * from './pipes/object';
export * from './pipes/string';
