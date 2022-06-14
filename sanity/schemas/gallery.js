import { GrGallery } from 'react-icons/gr';

export default {
  name: 'gallery',
  title: 'Galleries',
  type: 'document',
  icon: GrGallery,
  fields: [
    {
      name: 'name',
      title: 'Gallery name',
      type: 'string',
      description: 'Name of the gallery',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
