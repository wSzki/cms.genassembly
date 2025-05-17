// This file represents a Payload collection config for Press items
import { CollectionConfig } from 'payload';

const Press: CollectionConfig = {
  slug: 'press',
  labels : {
    singular: 'Press Article',
    plural: 'Press Articles',
  },
  admin: {
    useAsTitle: 'mainText',
    defaultColumns: ['mainText', 'subtext', 'url', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'mainText',
      type: 'text',
      label: 'Main text',
    },
    {
      name: 'subtext',
      type: 'text',
      label: 'Subtext',
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
    },
  ],
};

export default Press;
