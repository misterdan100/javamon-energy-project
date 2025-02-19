import { jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'
import { apiAxios } from './lib/axios'
import { UserFromAPI } from './interfaces/types'

export async function middleware(req: NextRequest) {

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        const token = req.cookies.get('javamon-jwt')?.value

        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url))
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-hardcoded-secret')
            if (!secret) {
                throw new Error('JWT_SECRET no está definido')
            }

            const { payload } = await jwtVerify(token, secret)

            const {data: user} = await apiAxios<UserFromAPI>(`/users/${payload.id}`)
            
            if(!user) {
                return NextResponse.redirect(new URL('/login', req.url))
            }

            return NextResponse.next()
        } catch (error) {
            console.log('Error al verificar el token:', error)
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*'],
}