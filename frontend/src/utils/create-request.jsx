import parseParams from './params-parser'

export default(
	endpoint,
	params = {}
) => {

	return async () => {
		try {
			const response = await fetch(`${endpoint}${parseParams(params)}`)
			return response.json()
		} catch(err) {
			console.log('error', err)
		}
	}
}
