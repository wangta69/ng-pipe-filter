import { NgModule } from '@angular/core';
import { CommaAddPipe } from "./comma-add.pipe";
import { CommaRemovePipe } from "./comma-remove.pipe";
import { Nl2brPipe } from "./nl2br.pipe";
import { StripTagsPipe } from "./strip-tags.pipe";

export * from './comma-add.pipe';
export * from './comma-remove.pipe';
export * from './nl2br.pipe';
export * from './strip-tags.pipe';

@NgModule({
  declarations: [
    CommaAddPipe,
    CommaRemovePipe,
    StripTagsPipe,
    Nl2brPipe,
  ],
  exports: [
    CommaAddPipe,
    CommaRemovePipe,
    StripTagsPipe,
    Nl2brPipe,
  ]
})
export class StringPipesModule {
}
