import parseParams from './params-parser'

export default(
	endpoint,
	params = {}
) => {

	console.log('params', `${endpoint}${parseParams(params)}`)

	return async () => {
		const response = await fetch(`${endpoint}${parseParams(params)}`)
		return response.json()
	}
}
