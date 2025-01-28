import { Home, LigatureIcon, Lightbulb, Trophy } from "lucide-react"

interface NvaLinksType {
    label:string ,
    src:string 
}
interface BarLinksType extends NvaLinksType{
    icon:React.ReactNode
}
const NavLinks:NvaLinksType[] =[
    {
        label:"About",
        src:'#about'
    },
    {
        label:"Prising",
        src:'#about'
    } ,
    {
        label:"FAQ",
        src:'#about'
    }
]
export default NavLinks
export const BarLinks:BarLinksType[] = [
    {
        label:"Home",
        src:'/re' ,
        icon:<Home/>
    } ,
    {
        label:"Ideas",
        src:'/Ideas' ,
        icon:<Lightbulb/>
    } ,
    {
        label:"Gols",
        src:'/Gols' ,
        icon:<Trophy/>
    } ,
]
