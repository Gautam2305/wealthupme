"use client"
import React from "react";
import { ButtonCTA } from "./utils/ButtonCTA";
import Image from "next/image";
import hero from "./utils/hero.png";
import hero2 from "./utils/hero2.png"
export const Cover = () => {
    return(<div className="font-sans w-full bg-gradient-to-br from-[#0A5783] to-[#18A19A] text-center text-white">
        <div className="relative z-0 h-full">
        <h1 className="text-7xl font-semibold pt-20">Check your financial health</h1>
        <p className="text-3xl sm:text-2xl font-light py-4 w-2/5 md:w-2/5 sm:w-full m-auto text-center">Use WealthoMeter to get a free report card for your finances- within minutes</p>
        <ButtonCTA content={"Get Started"}/>
        <div className="relative w-full m-auto">
            <Image className="absolute top-0 left-1/3 col-span-2" src={hero}/>
            <div className="grid grid-cols-2 py-10 justify-between gap-x-64" >
            <p className="py-4 font-semibold text-2xl underline underline-offset-8 w-96 justify-self-center">
                    <i className="fa-regular fa-square-check p-4"></i>
                    <span>Expected Retirement Age</span>
                </p>
                <p className="py-4 font-semibold text-2xl underline underline-offset-8 w-96 justify-self-center">
                    <i className="fa-regular fa-square-check p-4"></i>
                    <span>Identify Mistakes</span>
                </p>
                <p className="py-4 font-semibold text-2xl underline underline-offset-8 w-96 justify-self-center">
                    <i className="fa-regular fa-square-check p-4"></i>
                    <span>Personalised Road Map</span>
                </p>
                <p className="py-4 font-semibold text-2xl underline underline-offset-8 w-96 justify-self-center">
                    <i className="fa-regular fa-square-check p-4"></i>
                    <span>Tips to Improve</span>
                </p>
            </div>
                
        </div>
        <div className="relative mt-44 pt-32 h-screen rounded-t-full bg-[#0A5783]">
        
            {/* <div className="absolute z-0 h-full w-1/4 bg-cyan-500"></div> */}
            <h1 className="text-6xl font-bold">How it Works?</h1>
            <Image className="m-auto w-2/3" src={hero2}/>
            <div className="flex m-auto w-[70%] justify-between items-center py-5">
            <p className="w-44 h-20 3xl font-normal">Answer few questions</p>
            <p className="w-44 h-20 3xl font-normal">Register using phone and otp</p>
            <p className="w-44 h-20 3xl font-normal">Get report and personal roadmap</p>
            </div>
            <ButtonCTA content={"Get Started"}/>
        </div>
        </div>
    </div>)
}