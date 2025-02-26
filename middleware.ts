import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';
import withAuth from 'next-auth/middleware';

export default withAuth(async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const isAuth = await getToken({req:request});
    const portectedPages = ["/re",'Gols','Ideas'];
    const isportectedPages = portectedPages.some((page)=>pathname.startsWith(page))
    if(!isAuth && isportectedPages){
        return NextResponse.redirect(new URL('/auth', request.url))
    }
   
},
{

    callbacks:{
        async authorized(){
        return true
         }
  }
}
)


export const config = {
  matcher:['/re','/Gols','/Ideas','/auth'],
}