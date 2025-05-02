// This file represents a Payload global config for the About component
import { GlobalConfig } from 'payload';

const AboutGlobal: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Global Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'About Us',
      required: true,
    },
    {
      name: 'pageImages',
      type: 'array',
      label: 'About Page Images',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
          label: 'Alt Text',
        }
      ]
    },
    {
      name: 'generalAssemblyDescription',
      type: 'textarea',
      label: 'General Assembly description text',
    },
    {
      name: 'assemblyLineDescription',
      type: 'textarea',
      label: 'Assembly Line description text',
    },
    {
      name: 'sarahZamesDescription',
      type: 'textarea',
      label: 'Sarah Zames description text',
    },
    {
      name: 'colinStiefsDescription',
      type: 'textarea',
      label: 'Colin Stief description text',
    },
  ],
};

export default AboutGlobal;
