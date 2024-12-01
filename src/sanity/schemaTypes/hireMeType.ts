import { defineField, defineType } from "sanity";
import { SparklesIcon } from '@sanity/icons'

export const hireMeType = defineType({
    name: "hireMe",
    title: "Hire Me",
    type: "document",
    icon: SparklesIcon,
    fields: [
        defineField({
            name: "firstName",
            title: "First Name",
            type: "string",
        }),
        defineField({
            name: "lastName",
            title: "Last Name",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            validation: Rule => Rule.email(),
        }),
        defineField({
            name: "budget",
            title: "Budget",
            type: "string",

        }),
        defineField({
            name: "detail",
            title: "Detail",
            type: "text",
        }),
        defineField({
            name: "services",
            title: "Services",
            type: "string",
        })
    ]
})