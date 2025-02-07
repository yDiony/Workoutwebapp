import Image from "next/image"
import imagemdefundo from "@/app/images/imagemdefundo.png"

export default function page() {
    return(
     <div className="h-[100vh] w-[100%] flex justify-center items-center">
        <div className="flex flex-col w-[100%] items-center mb-[60px]">
        <Image
        src={imagemdefundo}
        alt=""
        className="w-[228px] h-[470px] "
        />
        <p className="font-['montserrat'] font-semibold text-[16px] text-center">Every movement tracked</p>
        
        <a href="/register" className="absolute bottom-[5vh] w-[90%] h-[52px] bg-black rounded-[8px] flex items-center justify-center">
            <p className="font-['montserrat'] text-[#fff] font-medium text-[16px]">Get started</p>
        </a>
        
        </div>
     </div>   
    )
}