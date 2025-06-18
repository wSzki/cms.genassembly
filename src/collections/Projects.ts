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
                required: true,
            },
            {
                name: 'projectLocation',
                type: 'text',
                label: 'Project Location',
                required: true,
            },
            {
                name: 'projectDate',
                type: 'text',
                label: 'Project Date',
                required: true,
            },
            {
                name: 'description',
                type: 'richText',
                label: 'Description',
                required: true,
            },
            {
                name: 'desktopMainImage',
                type: 'upload',
                label: 'Desktop Main Image',
                relationTo: 'media',
                required: true,
            },
            {
                name: 'mobileMainImage',
                type: 'upload',
                label: 'Mobile Main Image',
                relationTo: 'media',
                required: true,
            },
            {
                name: 'images',
                type: 'array',
                label: 'Images',
                required: true,
                admin : {
                    initCollapsed:true,
                },
                fields: [
                    {
                        name: 'image',
                        type: 'upload',
                        relationTo: 'media',
                        required: true,
                    },
                ],
            },
            {
                name: 'scopeOfWork',
                type: 'array',
                label: 'Scope of work',
                admin: {
                    initCollapsed:true,
                    components: {
                        RowLabel: './components/RowLabelScope.tsx'
                    },
                },
                fields: [
                    {
                        name: 'item',
                        type: 'text',
                        label : "",
                        required: true,
                    },
                ],
            },
            {
                name: 'credits',
                type: 'array',
                fields: [
                    {type: "row", fields: [
                        {name: 'type', type: 'text',required: true},
                        {name: 'name', type: 'text',required: true},
                    ]}
                ],
                admin : {
                    initCollapsed:true,
                    components: {
                        RowLabel: './components/RowLabelScope.tsx'
                    },
                }
            },
            {
                type: "array",
                name: "featuredIn",
                fields: [
                    {required:true, name: "name", type: "text",},
                    {required:true, name: "url", type: "text", label : "URL"},
                ],
                admin : {
                    initCollapsed:true,
                    components: {
                        RowLabel: './components/RowLabelScope.tsx'
                    },
                }
            },
        ],
};

export default Project;
