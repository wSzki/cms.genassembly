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
            // {
            //     name: 'title',
            //     type: 'text',
            //     label: 'About Us',
            //     required: true,
            // },
            // {
            //     name: 'pageImages',
            //     type: 'array',
            //     label: 'About Page Images',
            //     fields: [
            //         {
            //             name: 'image',
            //             type: 'upload',
            //             relationTo: 'media',
            //             required: true,
            //         },
            //         {
            //             name: 'altText',
            //             type: 'text',
            //             label: 'Alt Text',
            //         }
            //     ]
            // },
                        {
                type : 'group',
                name : 'contactInformation',
                fields : [
                        {
      name: 'address',
      type: 'richText',
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

                ]
            },

            {
                type : 'group',
                name : 'aboutGeneralAssembly',
                fields : [
                    {
                        name: 'image',
                        type: 'upload',
                        relationTo: 'media',
                        required: true,
                    },
                    {
                        name: 'aboutGeneralAssembly',
                        type: 'richText',
                        label: 'About General Assembly',
                    },
                ]
            },
            {
                type : 'group',
                name : 'aboutSarahAndColin',
                fields : [
                    {
                        name: 'image',
                        type: 'upload',
                        relationTo: 'media',
                        required: true,
                    },
                    {
                        name :'aboutSarahZames',
                        type: 'richText',
                        label: 'About Sarah Zames',
                    },
                    {
                        name: 'aboutColinStief',
                        type: 'richText',
                        label: 'About Colin Stief',
                    },
                ],
            },
        ],
};

export default AboutGlobal;
