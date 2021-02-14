export const getCompany = async () => {
	const apiURL = process.env.baseURL
	return fetch(`${apiURL}/companies`)
		.then((data) => data.json())
		.then((companies) => companies.company[0])
		.catch((err) => new Error(err))
}
