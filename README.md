# ng-pipe-filter
Tested for angular5

## Installation
```
npm install ng-pipe-filter
```


## How to use

### imports all pipe modules
``` app.module.ts
import { PipesFiltersModule } from 'ng-pipe-filter'
@NgModule({
    imports: [ PipesFiltersModule ]
})
```


### imports partial pipe modules
``` app.module.ts
import { StringPipesModule, ObjectPipesModule, BooleanPipesModule, MathPipesModule } from 'ng-pipe-filter'
@NgModule({
    imports: [ StringPipesModule, ObjectPipesModule, BooleanPipesModule, MathPipesModule ]
})
```


## StringPipesModule

### CommaAddPipe
- add comma
### CommaRemovePipe
-- remove comma
### Nl2brPipe
- change newline to br tag
### stripTags
- remove html tag


## ObjectPipesModule
### ToArrayPipe
### ToKeyValPipe
### ToKeyPipe

## BooleanPipesModule
### OnlyNumberPipe
- only numbers or not


## MathPipesModule
### RangePipe
