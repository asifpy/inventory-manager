export function getObjectValue(instance: any, field: string) {
	if(! instance) {
		return ''
	}
	return instance[field]
}

export function getObjectKeys (instance: any) {
	if (instance != null) {
		return Object.keys(instance)
	}
	else {
		return [null];
	}
}
