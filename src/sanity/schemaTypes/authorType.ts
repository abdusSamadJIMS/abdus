import { UserIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: 'socialMedia',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          type: 'string',
        },
        {
          name: 'instagram',
          type: 'string',
        },
        {
          name: 'github',
          type: 'string',
        },
        {
          name: 'linkedIn',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: "resume",
      title: "Resume",
      type: "file",
      options: {
        accept: "application/pdf",
      }
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
