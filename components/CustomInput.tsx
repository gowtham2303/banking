import React from 'react'
import {

    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Control, FieldPath, Form } from "react-hook-form"
  import { z } from "zod"
  import { authFormSchema } from '@/lib/utils'

 
  const formSchema = authFormSchema('sign-up')

  interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
  }
  

const CustomInput = ({control , name , label , placeholder }: CustomInput) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel htmlFor="email">
            {label}
        </FormLabel>
        <FormControl>
          <Input 
            placeholder={placeholder}
            className='input-class'
            type={name==='password' ? 'password': 'text'}
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
