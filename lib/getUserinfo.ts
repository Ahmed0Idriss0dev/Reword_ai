import { getServerSession } from "next-auth/next"
import options from "./Nextauth"

const getUserinfo = async  () => {
const session = await getServerSession(options)
  return session
}

export default getUserinfo