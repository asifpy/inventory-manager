export function getObjectValue(instance: any, field: string) {
	if(! instance) {
		return ''
	}
	return instance[field]
}
