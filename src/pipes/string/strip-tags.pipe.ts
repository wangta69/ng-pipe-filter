import {Pipe, PipeTransform} from '@angular/core';
import {is_string} from '../../functions/is-string.func';
import {is_undefined} from '../../functions/is-undefined.func';
//import {isString, isUndefined} from '../utils/utils';

@Pipe({
  name: 'strip_tags'
})
export class StripTagsPipe implements PipeTransform {

  transform(input: string): any {

    if (!is_string(input) || is_undefined(input))
    return input;

    return input.replace(/<\S[^><]*>/g, '');
  }
}
