import { Pipe, PipeTransform  } from '@angular/core';

/**
* @param Object input {arg1, arg2, arg3....}
* @param Array output [arg1, arg2, arg3]
*/
@Pipe({ name: 'range' })

export class RangePipe implements PipeTransform {
    transform(input, min:number, max:number): any {
		for (var i=min; i<=max; i++)
			input.push(i);
		return	input;
	}
}
