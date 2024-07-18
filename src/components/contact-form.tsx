'use client';

import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from './ui/button';
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea';

type Props = {}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is too short",
  }).max(50, {
    message: "Name is too long",
  }),
  email: z.string().email(),
  phone: z.string().min(10, {
    message: "Phone number is too short",
  }).max(15, {
    message: "Phone number is too long",
  }),
  message: z.string().min(10, {
    message: "Message is too short",
  }).max(500, {
    message: "Message is too long",
  }),
})

const ContactForm = (props: Props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    form.reset(); // Reset form to initial values
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => setShowSuccessMessage(false), 5000);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 shadow-xl dark:shadow-[#43b7ff] dark:border dark:border-[#43b7ff] dark:rounded-sm p-8 my-20 flex flex-col xs:w-[320px] sm:w-[400px] mx-auto lg:mx-0 lg:ml-10 lg:w-[400px]">
          <h1 className='text-3xl font-bold uppercase'>Drop us a line</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your Email Address" {...field} />
                </FormControl>
                <FormMessage className='text-xs -mb-4' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" placeholder="Your Phone Number" {...field} />
                </FormControl>
                <FormMessage className='text-xs -mb-4' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Your Message" {...field} />
                </FormControl>
                <FormMessage className='text-xs -mb-20' />
              </FormItem>
            )}
          />
          {showSuccessMessage && (
            <div className="text-sm text-green-400">
              Your message has been sent successfully!
            </div>
          )}
          <Button type="submit" className='self-end'>Submit</Button>
        </form>
      </Form>
    </>
  )
}

export default ContactForm