import {Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//import {isString, isUndefined} from '../utils/utils';

@Pipe({name: 'nl2br'})
export class Nl2brPipe implements PipeTransform {
	constructor(private sanitizer:DomSanitizer){}
	transform(str: string): any {
		if(typeof(str) == "undefined") return;
		var replaced = str.replace(/(?:\r\n|\r|\n)/g, '<br />');

		return this.sanitizer.bypassSecurityTrustHtml(replaced);

	}
}
