import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import { CompanyContext } from '../context/CompanyContext'
import { useContext } from 'react'

const BraticLayout = (props) => {
	const { children } = props
	const companyFetched = useContext(CompanyContext)
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />

				<meta name="copyright" content="bratic.es" />
				<meta name="author" content="yaidev.tech" />

				<meta name="keywords" content="Transformación digital, Proyectos de Transformación digital, Consultoría Transformación digital, Industria 4.0, Proyectos Industria 4.0, Consultoría Industria 4.0, Proyectos de digitalización, Consultoría digital, Logística 4.0, Proyectos Logística 4.0, Consultoría de Logística 4.0, Supply chain 4.0, Digitalización de procesos, Innovación industrial, Soluciones software, Herramientas digitalización, Ayudas digitalización, Consultoría de ayudas digitalización, Ayudas innovación, Ayudas fondo de recuperación europeo, Mejora continua, Lean manufacturing, Sistemas industriales, Optimización de procesos, Consultoría de datos, Implantación de soluciones, Implantación ERP, Implantación MES, Formación informática, Formación ciberseguridad, Formación sistemas informáticos, Servicios tecnología, Infraestructura, Cloud, Robótica, Automatización, IOT, Sensórica, Business intelligence, Analítica de datos, Mantenimiento predictivo, Captura de datos en planta, Cálculo OEE, Sistemas de gestión, Optimización trabajo operarios, Captura de datos en planta, Smart Rural, Smart Cities, Territorio Rural inteligente, Conectividad WiFi, Internet de banda ancha rural, Sensorización en el medio rural, Transporte sostenible, Ciberseguridad, Seguridad de la información, Seguridad Informática, Seguridad en Infraestructuras, Plan Director de Seguridad, Phising, Plan Movilidad Sostenible, Movilidad Urbana, Movilidad Rural, Promoción turística, Conservación patrimonial, Servicios al ciudadano, Gestión alumbrado público inteligente, Gestión del agua inteligente, Gestión de residuos inteligente, Auditoría de Ciberseguridad, Consultoría de Ciberseguridad, Proyectos de Ciberseguridad, Digitalización Territorio Rural, Consultoría de Digitalización Territorio Rural, Proyectos de Digitalización Territorio Rural, Transformación digital Cantabria, Proyectos de Transformación digital Cantabria, Consultoría Transformación digital Cantabria, Industria 4.0 Cantabria, Proyectos Industria 4.0 Cantabria, Consultoría Industria 4.0 Cantabria, Proyectos de digitalización Cantabria, Consultoría digital Cantabria, Logística 4.0 Cantabria, Proyectos Logística 4.0 Cantabria, Consultoría de Logística 4.0 Cantabria, Digitalización de procesos Cantabria, Innovación industrial Cantabria, Consultoría de ayudas digitalización Cantabria, Ciberseguridad Cantabria, Consultoría de Ciberseguridad Cantabria, Proyectos de Ciberseguridad Cantabria, Digitalización Territorio Rural Cantabria, Consultoría de Digitalización Territorio Rural Cantabria, Proyectos de Digitalización Territorio Rural Cantabria, Transformación digital Castilla y León, Proyectos de Transformación digital Castilla y León, Consultoría Transformación digital Castilla y León, Industria 4.0 Castilla y León, Proyectos Industria 4.0 Castilla y León, Consultoría Industria 4.0 Castilla y León, Proyectos de digitalización Castilla y León, Consultoría digital Castilla y León, Logística 4.0 Castilla y León, Proyectos Logística 4.0 Castilla y León, Consultoría de Logística 4.0 Castilla y León, Digitalización de procesos Castilla y León, Innovación industrial Castilla y León, Consultoría de ayudas digitalización Castilla y León, Ciberseguridad Castilla y León, Consultoría de Ciberseguridad Castilla y León, Proyectos de Ciberseguridad Castilla y León, Digitalización Territorio Rural Castilla y León, Consultoría de Digitalización Territorio Rural Castilla y León, Proyectos de Digitalización Territorio Rural Castilla y León, " />

				<title>bratic || Consultoría Digital</title>
			</Head>
			<NavBar company={ companyFetched } />
			<main>{ children }</main>
			<Footer company={ companyFetched } />
		</>
	)
}

export default BraticLayout
