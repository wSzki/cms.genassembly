
// This file represents a Payload global config for Projects Order
import { GlobalConfig } from 'payload';

const ProjectsOrderGlobal: GlobalConfig = {
  slug: 'projects-order',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Global Content',
  },
  fields: [
    {
      name: 'projectsOrderTitle',
      type: 'text',
      label: 'Projects Order Title',
      required: true,
    },
    {
      name: 'projects',
      type: 'relationship',
      label: 'Projects',
      relationTo: 'projects',
      hasMany: true,
      admin: {
        description: 'Select and arrange projects in the order you want them to appear on the page.'
      }
    },
  ],
};

export default ProjectsOrderGlobal;
