import { NgModule } from '@angular/core';
import { Nl2brPipe } from "./nl2br.pipe";
import { StripTagsPipe } from "./strip-tags.pipe";

export * from './nl2br.pipe';
export * from './strip-tags.pipe';

@NgModule({
  declarations: [
    StripTagsPipe,
    Nl2brPipe,
  ],
  exports: [
    StripTagsPipe,
    Nl2brPipe,
  ]
})
export class StringPipesModule {
}
