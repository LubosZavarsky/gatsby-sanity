import { GiNotebook } from 'react-icons/gi';

export default {
  name: 'bio',
  title: 'Biography',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Stuff you need to say',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
