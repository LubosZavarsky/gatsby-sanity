import { BsCalendar3 } from 'react-icons/bs';

export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  icon: BsCalendar3,
  fields: [
    {
      name: 'name',
      title: 'Event name',
      type: 'string',
      description: 'Name of the event',
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
      name: 'description',
      title: 'Event description',
      type: 'string',
      options: {
        maxLength: 800,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Event poster',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Event date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
