
'use client'
import React, { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Checkbox } from './ui/checkbox'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { createHireMe } from '@/lib/action'
import { useToast } from '@/hooks/use-toast'

export const formSchema = z.object({
    services: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one service.",
    }),
    budget: z.enum(["upto-5k", "5k-15k", "15k-30k", "morethan-30k"], {
        required_error: "You need to select a budget.",
    }),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().email().min(1, "Email is required"),
    details: z.string().optional(),
})

const services = [
    {
        id: "web-development",
        label: "Web Development"
    },
    {
        id: "graphic-design",
        label: "Graphic Design"
    },
    {
        id: "frontend",
        label: "Frontend"
    },
    {
        id: "Backend",
        label: "Backend"
    },
    {
        id: "mobile-application",
        label: "Mobile Application"
    },
    {
        id: "seo",
        label: "SEO"
    },

]

const budgetOptions = [
    { id: "upto-5k", label: "Upto 5k" },
    { id: "5k-15k", label: "5k-15k" },
    { id: "15k-30k", label: "15k-30k" },
    { id: "morethan-30k", label: "More than 30k" }
]

const HireMeForm = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [selectedBudget, setSelectedBudget] = useState(budgetOptions[0].id)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            details: "",
            firstName: "",
            lastName: "",
            services: ['web-development'],
            email: "",
            budget: "upto-5k"
        }
    })

    const handleChange = (id: string) => {
        setSelectedOptions((prev) =>
            prev.includes(id)
                ? prev.filter((option) => option !== id) // Deselect if already selected
                : [...prev, id] // Select if not selected
        );
    };


    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await createHireMe(values)
        if (res.success) {
            toast({
                title: "Thank you!",
                description: "Your details have been submitted. I'll get back to you soon.",
                variant: "default"
            })
            form.reset();
        } else {
            toast({
                title: "Oops!",
                description: "Something went wrong. Please try again later.",
                variant: "destructive"
            })
        }
    }
    return (
        <div>
            <Form
                {...form}
            >
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className='font-park font-semibold
                    space-y-10
                    '
                >
                    <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base sm:text-4xl">Services</FormLabel>
                                </div>
                                <div
                                    className='flex
                                    max-sm:flex-wrap
                                    gap-1 sm:gap-4'
                                >

                                    {services.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="services"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-col items-start sm:space-x-3 space-y-0

                                                    "
                                                    >
                                                        <FormControl>
                                                            <label
                                                                key={item.id}
                                                                htmlFor={item.id}
                                                                after-dynamic-value={item.label}
                                                                className={`flex items-center justify-center p-1 sm:px-4 sm:py-2  cursor-pointer transition-all
                                                                lg:w-36
                                                                lg:h-24
                                                                md:w-28
                                                                md:h-24
                                                                w-20
                                                                h-16
                                                                md:text-base
                                                                sm:text-[0.64rem]
                                                                text-[0.5rem]
                                                                line-clamp-2
                                                                
                                                                
                                                                relative
                                                                after:content-[attr(after-dynamic-value)]
                                                                after:absolute
                                                                after:z-10
                                                                border
                                                               text-center
                                                                ${selectedOptions.includes(item.id)
                                                                        ? "bg-gradient-to-r from-myPrimary to-mySecondary text-white"
                                                                        : "bg-background  hover:bg-secondary"
                                                                    }`}
                                                            >
                                                                <Checkbox
                                                                    id={item.id}
                                                                    className='hidden'
                                                                    // checked={field.value?.includes(item.id)}
                                                                    checked={selectedOptions.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        handleChange(item.id)
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            )
                                                                    }}
                                                                />
                                                            </label>
                                                        </FormControl>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel className="text-base sm:text-4xl">Budget</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={(e) => {
                                            field.onChange(e)
                                            setSelectedBudget(e)
                                        }}
                                        defaultValue={field.value}
                                        value={selectedBudget}
                                        className="flex "
                                    >
                                        {budgetOptions.map((option) => (
                                            <label
                                                key={option.id}
                                                htmlFor={option.id}
                                                className={`flex items-center justify-center px-4 py-2  cursor-pointer transition-all
                                                     lg:w-36
                                                                lg:h-24
                                                                md:w-28
                                                                md:h-24
                                                                w-20
                                                                h-16
                                                                md:text-base
                                                                sm:text-[0.64rem]
                                                                text-[0.5rem]
                                                                line-clamp-2
                                                                relative
                                                                after:content-[attr(after-dynamic-value)]
                                                                after:absolute
                                                                after:z-10
                                                                border
                                                               text-center
                                                    ${selectedBudget === option.id
                                                        ? "bg-gradient-to-r from-myPrimary to-mySecondary text-white"
                                                        : "bg-background text-foreground hover:bg-gray-800"
                                                    }`}
                                            >
                                                <RadioGroupItem
                                                    id={option.id}
                                                    value={option.id}
                                                    className="hidden" // Hide the default radio button
                                                />
                                                {option.label}
                                            </label>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <div
                        className='space-y-3'
                    >
                        <FormLabel className="text-base sm:text-4xl ">Personal Data</FormLabel>
                        <div
                            className='grid grid-cols-1 md:grid-cols-3
                        gap-x-4
                        gap-y-2
                        '
                        >

                            <FormField
                                name='firstName'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder='First Name'
                                                type='text'
                                                className='rounded-none
                                                placeholder:font-thin
                                            
                                            '
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name='lastName'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder='Last Name'
                                                type='text'
                                                className='rounded-none
                                            placeholder:font-thin
                                            '
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name='email'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder='Email'
                                                type='email'
                                                className='rounded-none
                                            placeholder:font-thin
                                            '
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        name='details'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder='Project Details (Optional)'
                                        className='rounded-none
                                        placeholder:font-thin
                                        '
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button
                        className='
                        focus:outline
                        flex gap-1 uppercase items-center font-semibold bg-gradient-to-r from-myPrimary to-mySecondary px-4 py-2 rounded-full shadow-md shadow-secondary
                        '
                        type='submit'>
                        Hire me
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default HireMeForm