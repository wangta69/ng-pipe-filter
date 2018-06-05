import { NgModule } from '@angular/core';

import { ToArrayPipe } from "./to-array.pipe";
import { ToKeyValPipe } from "./to-key-val.pipe";
import { ToKeyPipe } from "./to-key.pipe";

export * from './to-array.pipe';
export * from './to-key-val.pipe';
export * from './to-key.pipe';

@NgModule({
  declarations: [
    ToArrayPipe,
    ToKeyValPipe,
    ToKeyPipe
  ],
  exports: [
    ToArrayPipe,
    ToKeyValPipe,
    ToKeyPipe
  ]
})
export class ObjectPipesModule {
}
