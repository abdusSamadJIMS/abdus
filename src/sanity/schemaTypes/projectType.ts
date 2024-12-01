import { ProjectsIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'tag' } })],
    }),
    // defineField({
    //   name: 'completedAt',
    //   type: 'datetime',
    // }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: "isCompleted",
      type: "boolean",
      title: "Is project completed?"
    }),
    defineField({
      name: "completedAt",
      title: "Completion Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD"
      },
      hidden: ({ parent }) => !parent.isCompleted,
      validation: (Rule) =>
        Rule.custom((date, context) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if ((context.parent as any).isCompleted && !date) {
            return 'Completion date is required when the project is complete.';
          }
          return true;
        }),
    },

    )
  ],
  // preview: {
  //   select: {

  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
