"use client";

import React from 'react'
import { useFormState } from 'react-dom'
import * as actions from "@/app/actions"



function AddLesson() {

  const [formState, action] = useFormState(actions.CreateLesson, {
    errors: {},
  });
  return (
    <form action={action} >
       <input type='text'  name="title"/>
       <button type="submit">
          create lesson
       </button>
    </form>
  )
}

export default AddLesson