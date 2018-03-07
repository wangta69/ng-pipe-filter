import { NgModule } from '@angular/core';
import { OnlyNumberPipe } from "./only-number.pipe";

export * from "./only-number.pipe";

@NgModule({
  declarations: [
    OnlyNumberPipe
  ],
  exports: [
    OnlyNumberPipe
  ]
})
export class BooleanPipesModule {
}
