
// This file represents a Payload global config for the Press Page
import { GlobalConfig } from 'payload';

const PressPageGlobal: GlobalConfig = {
  slug: 'press-page',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Global Content',
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      label: 'Page Title',
      required: true,
    },
    {
      name: 'pressArticles',
      type: 'relationship',
      label: 'Press articles',
      relationTo: 'press',
      hasMany: true,
    },
  ],
};

export default PressPageGlobal;
