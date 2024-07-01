"use server"

import { db } from "../db"
import { ProductType, Season } from "../types"

export const fetchLessonDetail = async (tag: string): Promise<ProductType> => {
    const restaurant = await db.lessons.findUnique({
      where: {
        tag,
      },
      select: {
        id: true,
        name: true,
        price: true,
        tag: true,
        description: true,
      },
    })
    if (!restaurant) {
      throw new Error('cannot find restaurant')
    }
    return restaurant
  }


  export const fetchSeasons=async (tag:string):Promise<Season[]>=>{
    const seasonData=await db.seasons.findMany({
        where:{
            tag,
        },
        select:{
            id:true,
            name:true,
            qunatity:true,
            image:true,
        
        },
    })
    if (!seasonData) {
        throw new Error('cannot find seasonData')
      }
      return seasonData
  }