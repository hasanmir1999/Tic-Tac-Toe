import { CgClose } from "react-icons/cg";
import { MdOutlineCircle } from "react-icons/md";
import './Cel.css'
import toast from "react-hot-toast";
import { LuCircleEqual } from "react-icons/lu";

export default function Cel({celInfo , setCelInfo , cels , setCels , id , info , status ,celObjects}){


    const setHandler = ()=>{
        const newCels = [...cels]
        newCels.map(cel => {
            if(cel.id != id && cel.status != 'fill'){
                cel.info = celInfo ? <CgClose /> : <MdOutlineCircle />
            }
            if(cel.id == id ){
                cel.status = 'fill'
                cel.xORo = celInfo ? 'O' : 'X'
            }
        })
        if(newCels[0].xORo != '' && newCels[0].xORo == newCels[1].xORo && newCels[0].xORo == newCels[2].xORo){
            toast.success(`${newCels[0].xORo} win!`)
            setCels(celObjects)
            return
        }
        else if(newCels[3].xORo != '' && newCels[3].xORo == newCels[4].xORo && newCels[3].xORo == newCels[5].xORo){
            toast.success(`${newCels[3].xORo} win!`)
            setCels(celObjects)
            return
        }
        else if(newCels[6].xORo != '' && newCels[6].xORo == newCels[7].xORo && newCels[6].xORo == newCels[8].xORo){
            toast.success(`${newCels[6].xORo} win!`)
            setCels(celObjects)
            return
        }
        else if(newCels[0].xORo != '' && newCels[0].xORo == newCels[3].xORo && newCels[0].xORo == newCels[6].xORo){
            toast.success(`${newCels[0].xORo} win!`)
            setCels(celObjects)
            return
        }
        else if(newCels[1].xORo != '' && newCels[1].xORo == newCels[4].xORo && newCels[1].xORo == newCels[7].xORo){
            toast.success(`${newCels[1].xORo} win!`)
            setCels(celObjects)
            return
        }
        else if(newCels[2].xORo != '' && newCels[2].xORo == newCels[5].xORo && newCels[2].xORo == newCels[8].xORo){
            toast.success(`${newCels[2].xORo} win!`)
            setCels(celObjects)
            return
        }
        else if(newCels[0].xORo != '' && newCels[0].xORo == newCels[4].xORo && newCels[0].xORo == newCels[8].xORo){
            toast.success(`${newCels[0].xORo} win!`)
            setCels(celObjects)
            return
        }
        else if(newCels[2].xORo != '' && newCels[2].xORo == newCels[4].xORo && newCels[2].xORo == newCels[6].xORo){
            toast.success(`${newCels[2].xORo} win!`)
            setCels(celObjects)
            return
        }
        else{
            if(newCels.every(cels => cels.status == 'fill')){
                toast('equal!' , {
                    icon: <LuCircleEqual size={'20px'} color="green"/>
                })
                setCels(celObjects)
                return
            }
        }
        setCels(newCels)
        setCelInfo(!celInfo)
    }

    return(
        <>
            <div className="cel" onClick={setHandler}>
                <span className={`${status}`}>
                    {info}
                </span>
            </div>
        </>
    )
}