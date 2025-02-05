import { Emailicon } from "@/app/components/emailicon/page";
import Lockicon from "@/app/components/lockicon/page";
import TokenButton from "@/app/components/token/page";

export default function page() {
    return (
        <div className="w-[100%] flex flex-col">

            <div className="w-[100%] flex-col flex">
                <div className="bg-[#18181B] h-[200px] w-[65%] flex justify-end">
                    <div className=" bg-[#18181B] w-[200px] h-[200pxvh] rounded-[100%] mr-[-6rem] " style={{ border: "5px white solid" }}>

                    </div>

                </div>
                <div className="flex flex-col ml-[5%] mt-[10vh]">
                    <p className="font-['montserrat'] text-[32px] font-medium">Login</p>
                    <p className="font-['montserrat'] text-[16px] font-light">Please sign in to continue</p>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="flex flex-col mt-[5%] w-[90%] items-center justify-center">
                    <div className="flex w-[100%] items-center h-[50px] border-[#E0E0E0] border-solid border-[2px] rounded-[8px]">
                        <div className="ml-[5%]">

                            <Emailicon />
                        </div>

                        <input className="outline-none ml-[5%]" type="email" placeholder="Email"></input>
                    </div>
                    <div className="flex w-[100%] items-center h-[50px] border-[#E0E0E0] border-solid border-[2px] rounded-[8px] mt-[4%]">
                        <div className="ml-[5%]">
                            <Lockicon />
                        </div>
                        <input className="outline-none ml-[5%]" type="password" placeholder="Password"></input>
                    </div>
                </div>                
            </div>
            <div className="w-[100%] flex justify-center items-center">

            <div className="w-[90%] mt-[10px]">
                <p className="font-['montserrat'] font-light text-[14px]">Don't have an account? <span className="font-semibold underline">Sign up</span></p>
            </div>
           <TokenButton />
            </div>
        </div>
    );
}