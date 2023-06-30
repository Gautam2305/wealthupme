"use client"
import React from "react"

export const ButtonCTA = ({content}) => {
    return(
        <button className="w-64 text-center text-white bg-orange-500 rounded-3xl py-2 text-3xl font-semibold">
            {content}
        </button>
    )
}