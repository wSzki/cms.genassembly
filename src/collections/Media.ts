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
                quality: 100,
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
            {
                name: 'card',
                withoutEnlargement: false,
                width: 768,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: {
                        quality: 80,
                    },
                },
            },
            {
                name: 'tablet',
                width: 1024,
                withoutEnlargement: false,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: {
                        quality: 80,
                    },
                },
            },
            {
                name: 'desktop80',
                width: 1280,
                withoutEnlargement: false,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: {
                        quality: 80,
                    },
                },
            },
            {
                name: 'desktop90',
                width: 1281,
                withoutEnlargement: false,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: {
                        quality: 90,
                    },
                },
            },
            {
                name: 'full80',
                width: 2048,
                withoutEnlargement: false,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: {
                        quality: 80,
                    },
                },
            },
            {
                name: 'full90',
                width: 2049,
                withoutEnlargement: false,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: {
                        quality: 90,
                    },
                },
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
}

