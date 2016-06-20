import { Injectable } from '@angular/core';


@Injectable()
export class ObjectKeysService {
	keys(object): Array<string> {
		//console.log(object);
		return Object.keys(object);
	}
}