import { NgModule } from '@angular/core';

import { RangePipe } from "./range.pipe";

export * from './range.pipe';

@NgModule({
  declarations: [
    RangePipe
  ],
  exports: [
    RangePipe
  ]
})
export class MathPipesModule {
}
