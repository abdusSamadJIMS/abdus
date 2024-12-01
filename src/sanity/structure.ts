import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Author'),
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('tag').title('Tag'),
      S.documentTypeListItem('hireMe').title('Hire Me'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', "tag", 'project', "hireMe"].includes(item.getId()!),
      ),
    ])
