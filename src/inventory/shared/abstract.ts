export abstract class ObjectKeys {
	keys(object): Array<string> {
		if (object != null) {
			return Object.keys(object);
		}
		else {
			return [null];
		}
	}
}