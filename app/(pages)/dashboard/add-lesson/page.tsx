"use client";

import React from 'react'
import { useFormState } from 'react-dom'
import * as actions from "@/app/actions"



export default function AddLesson() {

  const [formState, action] = useFormState(actions.CreateLesson, {
    errors: {},
  });
  return (
    <form action={action} >
       <input type='text'  name="name"/>
       {formState.errors?.name?.join(", ")}
       <input type='text'  name="description"/>
       <input type='text'  name="tag"/>
       <input type='number'  name="price"/>
       <input type='text'  name="invoiceStatus"/>
       {formState?.errors?._form ? (
              <div className="rounded p-2 bg-red-200 border border-red-400">
                {formState.errors._form?.join(', ')}
              </div>
            ) : null}
       <button type="submit">
          create lesson
       </button>
       {/* {formState.errors} */}
    </form>
  )
}

