import { CompanyContext } from '../context/CompanyContext'
import '../scss/global.scss'
import 'animate.css'

function MyApp({ Component, pageProps }) {
	const companyFetched = pageProps.companyFetched
	return (
		<CompanyContext.Provider value={ { companyFetched } }>
			<Component { ...pageProps } />
		</CompanyContext.Provider>
	)
}

export default MyApp
