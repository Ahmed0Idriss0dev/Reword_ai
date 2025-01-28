
import GoogleProvider from "next-auth/providers/google";
const authOptions = {

    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string ,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ] ,
   
       pages:{
           signIn:'/auth'
       } ,
       


   
}

export default authOptions