// This file represents a Payload global config for Contact Information
import { GlobalConfig } from 'payload';

const Contact: GlobalConfig = {
  slug: 'contact',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Global Content',
  },
  fields: [
    {
      name: 'addressLine1',
      type: 'text',
      label: 'Address Line 1',
      required: true,
    },
    {
      name: 'addressLine2',
      type: 'text',
      label: 'Address Line 2',
    },
    {
      name: 'addressLine3',
      type: 'text',
      label: 'Address Line 3',
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
    },
    {
      name: 'phoneNumber',
      type: 'text', // Using text instead of number to handle formatting characters
      label: 'Phone Number',
    },
    {
      name: 'linkedin',
      type: 'text',
      label: 'LinkedIn',
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram',
    },
  ],
};

export default Contact
