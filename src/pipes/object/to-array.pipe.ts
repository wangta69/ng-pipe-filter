import { Pipe, PipeTransform  } from '@angular/core';
import {is_object} from '../../functions/is-object.func';

@Pipe({ name: 'to_array' })
export class ToArrayPipe implements PipeTransform {

  transform (input: any): any {

    if (!is_object(input)) {
      return input;
    }

    return Object.keys(input).map((value) => input[value]);
  }
}
