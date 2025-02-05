import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"

const publicRoutes = [
    { path: '/register', whenAuthenticated: 'redirect'},
    { path: '/login', whenAuthenticated: 'redirect'},
    { path: '/', whenAuthenticated: 'redirect'}
]

const redirecionarquandonaoautenticado = "/"

export function middleware(request: NextRequest){
    const path = request.nextUrl.pathname;
    const publicRoute = publicRoutes.find(route => route.path === path)
    const authToken = request.cookies.get('token');

    if(!authToken && publicRoute){
        return NextResponse.next();
    }

    if(!authToken && !publicRoute){
        const redirectUrl = request.nextUrl.clone();

        redirectUrl.pathname = redirecionarquandonaoautenticado

        return NextResponse.redirect(redirectUrl)
    }

    if (authToken && publicRoute && publicRoute.whenAuthenticated === "redirect"){
        const redirectUrl = request.nextUrl.clone();

        redirectUrl.pathname = "/dashboard";

        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && !publicRoute){
        //checar se o jwt esta expirado
        //se sim remover o cookie e redirecionar o usuario para o login
        // aplicar estrategia de refresh (ruim)
        return NextResponse.next()
    }

    return NextResponse.next();
}

export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      ],
}