import { CompanyContext } from '../context/CompanyContext'
import { useRouter } from 'next/router';

import '../scss/global.scss'
import 'animate.css'
import { useEffect, useState } from 'react';
import Loader from '../components/ui/Loader/Loader';

function MyApp({ Component, pageProps }) {
	const companyFetched = pageProps.companyFetched
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const handleComplete = () => { setLoading(false) }
	const handleStart = () => { setLoading(true) }

	useEffect(() => {

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

	}, [router])

	return (
		<CompanyContext.Provider value={ { companyFetched } }>
			<Loader loading={ loading } />
			<Component { ...pageProps } />
		</CompanyContext.Provider>
	)
}

export default MyApp
