import React from 'react'
import {

    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Control, Form } from "react-hook-form"
  import { z } from "zod"
  import { authFormSchema } from '@/lib/utils'

 

  interface CustomInput {
    control : Control<z.infer<typeof authFormSchema>>
    name: string,
    label : String,
    placeholder : String
  }


const CustomInput = ({control , name , label , placeholder}) => {
  return (
    <FormField
    control={control}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormLabel htmlFor="email">
            {label}
        </FormLabel>
        <FormControl>
          <Input 
            id="email"
            placeholder={placeholder}
            className='input-class'
            type="password"
            {...field} // spread field props here
          />
        </FormControl>
        <FormMessage
        className='form-message mt-2' />
      </FormItem>
    )}
  />
  )
}

export default CustomInput
