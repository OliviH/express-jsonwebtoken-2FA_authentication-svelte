import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

export function start() {
	dotenv.config()
	const app = express()

	const PORT: number = (process.env.PORT) ? parseInt(process.env.PORT) : 10024
	const HOST: string = (process.env.HOST) ? process.env.HOST : 'localhost'
	const PUBLIC: string = path.resolve(__dirname, '../../', (process.env.STATIC) ? process.env.STATIC : 'public')

	console.log('\x1b[36m', "VARIABLES:", PORT, HOST, PUBLIC, '\x1b[0m')

	app.use(cors())
	app.use(express.json())
	app.use(cookieParser())

	app.use(morgan('dev'))

	app.use(express.static(path.resolve(__dirname, PUBLIC)))

	app.listen(PORT, HOST, () => console.log('\x1b[36m%s\x1b[0m', `WEB AUTHENTICATION ENGINE ACCESSIBLE AT http://${HOST}:${PORT}`))
}