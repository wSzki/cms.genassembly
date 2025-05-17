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
                name: 'imageA',
                type: 'upload',
                relationTo: 'media',
                required: true,
            },
            {
                name: 'aboutGeneralAssembly',
                type: 'richText',
                label: 'About General Assembly',
            },
            {
                name: 'imageB',
                type: 'upload',
                relationTo: 'media',
                required: true,
            },

            {
                name :'aboutColinStief',
                type: 'richText',
                label: 'About Colin Stief',
            },
            {
                name :'aboutSarahZames',
                type: 'richText',
                label: 'About Sarah Zames',
            },
        ],
};

export default AboutGlobal;
