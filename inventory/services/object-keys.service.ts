import { Injectable } from '@angular/core';


@Injectable()
export class ObjectKeysService {
	keys(object): Array<string> {
		if (object != null) {
			return Object.keys(object);
		}
		else {
			return [null];
		}
	}
}