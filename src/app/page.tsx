"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
} from "@/components/ui/form";

const FormSchema = z.object({
  mattevideoer: z.string(),
  fysikkvideoer: z.string(),
})

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues : {
      mattevideoer: "",
      fysikkvideoer: "",
    }
  })

  function onSubmit() {
    // toast("Du skrev", {
    //   description: (
    //     <pre className="mt-2 w-[320px] rounded-md bg-netural-950 p-4">
    //       <code className="text-white">{JSON.stringify(data)}</code>
    //     </pre>
    //   )
    // })
    toast("hello")
    console.log("hello?")
  }
  
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-10 md:p-12">
      <div className="w-full max-w-sm">
        <h1 className="scroll-m-20 border-b pb-2 mb-8 text-3xl font-semibold tracking-tight first:mt-0">Hvor mye i dag?</h1>

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Dagens kvote :)</h4>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>5 matte sider</li>
            <li>1 matte videoer</li>
            <li>5 fysikk sider</li>
            <li>1 fysikk videoer</li>
        </ul>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="mattevideoer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Matte Videoer</FormLabel>
                  <FormControl>
                    <Input placeholder="Antall videoer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fysikkvideoer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fysikk Videoer</FormLabel>
                  <FormControl>
                    <Input placeholder="Antall videoer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
