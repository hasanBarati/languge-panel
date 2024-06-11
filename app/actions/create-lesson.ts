'use server'
import { z } from 'zod'
import { db } from '../db'

const createLessonSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  tag: z.string().min(3),
  price: z.number(),
  invoiceStatus: z.string().min(2),
})

interface CreateLessonFormState {
  errors: {
    name?: string[]
    description?: string[]
    tag?: string[]
    price?: number[]
    invouceStatus?: string[]
    _form?: string[]
  }
}
export async function CreateLesson(
  formState: CreateLessonFormState,
  formdata: FormData,
): Promise<CreateLessonFormState> {
  const result = createLessonSchema.safeParse({
    name: formdata.get('name') as string,
    description: formdata.get('description') as string,
    tag: formdata.get('tag') as string,
    price: Number(formdata.get('price')),
    invoiceStatus: formdata.get('invoiceStatus') as string,
  })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors ,
    }
  }

  try {
    const name = formdata.get('name') as string
    const description = formdata.get('description') as string
    const tag = formdata.get('tag') as string
    const price = Number(formdata.get('price'))
    const invoiceStatus = formdata.get('invoiceStatus') as string

    // Create a new lesson in the database
    const newLesson = await db.lessons.create({
      data: {
        name,
        description,
        tag,
        price,
        invoiceStatus,
      },
    })

    return { success: true, lesson: newLesson }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      }
    } else {
      return {
        errors: {
          _form: ['Something went wrong'],
        },
      }
    }
  }
}
