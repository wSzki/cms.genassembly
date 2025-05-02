// This file represents a Payload collection config for Featured In items
import { CollectionConfig } from 'payload';

const FeaturedIn: CollectionConfig = {
  slug: 'featured-in',
  admin: {
    useAsTitle: 'text',
    defaultColumns: ['text', 'url', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'Text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
    },
  ],
};

export default FeaturedIn;
