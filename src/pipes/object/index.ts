import { NgModule } from '@angular/core';

import { ToArrayPipe } from "./to-array.pipe";

export * from './to-array.pipe';

@NgModule({
  declarations: [
    ToArrayPipe
  ],
  exports: [
    ToArrayPipe
  ]
})
export class ObjectPipesModule {
}
