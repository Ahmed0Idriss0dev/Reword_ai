import authOptions from "@/lib/Nextauth"
import NextAuth from "next-auth/next"
const auths = NextAuth(authOptions)
export {auths as GET , auths as POST}