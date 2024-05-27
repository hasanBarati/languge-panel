import  { ReactNode } from "react"

export interface LinkType{
    title:string
    href:string
    icon:string

}

export interface SvgSpriteType{
    icon:ReactNode
    color?:string
    width?:number
    height?:number
}