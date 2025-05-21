import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    labels: {
        singular: 'Image, Picture',
        plural: 'Image, Pictures',
    },
    access: {
        read: () => true,
    },
    fields: [
        // {
        //   name: 'alt',
        //   type: 'text',
        //   // required: true,
        // },
    ],
    upload: {
        staticDir: 'media',
        formatOptions: {
            format: 'webp',
            options: {
                quality: 80,
            },
        },
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: undefined,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: {
                        quality: 80,
                    },
                },
            },
            // {
            //     name: 'card',
            //     width: 768,
            //     height: undefined,
            //     position: 'centre',
            // },
            // {
            //     name: 'tablet',
            //     width: 1024,
            //     height: undefined,
            //     position: 'centre',
            // },
            // {
            //     name: 'desktop',
            //     width: 1280,
            //     height: undefined,
            //     position: 'centre',
            // },
            // {
            //     name: 'full',
            //     width: 2048,
            //     height: undefined,
            //     position: 'centre',
            // },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
}
