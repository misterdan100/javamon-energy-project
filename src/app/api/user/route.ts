import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const userName = req.headers.get('x-user-name')
    const userRol = req.headers.get('x-user-rol')

    return NextResponse.json({ userName, userRol })
}