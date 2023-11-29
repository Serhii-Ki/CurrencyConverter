const requests = {
	getCurrencyValue: async (fromCurrency, toCurrency) => {
		const endpoint = `currencies/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}.json`
		const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/${endpoint}`

		const response = await fetch(apiUrl)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		return await response.json()
	}
}

export default requests
