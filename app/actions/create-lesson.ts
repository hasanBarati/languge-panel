"use server"
import { db } from '../db'

export async function CreateLesson(formState, formdata: FormData) {
  console.log('run ', formdata.get('title'))
  try {
    db.lessons.create({
      data: { 
        name: formdata.get('title') as string, 
        description:"",
        tag:"testTag",  
        price:20000,
        invoiceStatus:"0"
    },
    })
  } catch (error) {
    console.log('error', error)
  }
}
