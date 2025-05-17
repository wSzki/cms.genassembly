// This file represents a Payload collection config for Projects
import { CollectionConfig } from 'payload';

const Project: CollectionConfig = {
  slug: 'projects',
  labels : {
    singular: 'Project',
    plural: 'Projects',
  },
  admin: {
    useAsTitle: 'projectTitle',
    defaultColumns: ['projectTitle', 'projectSubtitle', 'projectLocation', 'projectDate'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'projectTitle',
      type: 'text',
      label: 'Project Title',
      required: true,
    },
    {
      name: 'projectSubtitle',
      type: 'text',
      label: 'Project Subtitle',
    },
    {
      name: 'projectLocation',
      type: 'text',
      label: 'Project Location',
    },
    {
      name: 'projectDate',
      type: 'text',
      label: 'Project Date',
    },
    {
      name: 'scopeOfWork',
      type: 'array',
      label: 'Scope of work',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'credits',
      type: 'array',
      label: 'Credits',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'featured',
      type: 'relationship',
      label: 'Featured',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'featuredIn',
      type: 'array',
      label: 'Featured in',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name: 'desktopMainImage',
      type: 'upload',
      label: 'Desktop Main Image',
      relationTo: 'media',
    },
    {
      name: 'mobileMainImage',
      type: 'upload',
      label: 'Mobile Main Image',
      relationTo: 'media',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
        }
      ],
    },
  ],
};

export default Project;
