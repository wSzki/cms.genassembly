

// This file represents a Payload global config for Projects Order
import { GlobalConfig } from 'payload';

const ProjectsOrderGlobal: GlobalConfig = {
    slug: 'allProjects',
    access: {
        read: () => true,
    },
        admin: {
            group: 'Global Content',
        },
        fields: [
            {
                type:'array',
                name: 'projectsArray',
                label: 'Projects',
                labels: {
                    singular: 'Project',
                    plural: 'Projects',
                },
                required: true,
                admin:{
                    description: 'Select and arrange projects in the order you want them to appear on the website.',
                    initCollapsed:true,
                    components: {
                        RowLabel: './components/RowLabelProjects.tsx'
                    },
                },
                fields: [
                    {
                        name: 'projectItem',
                        type: 'relationship',
                        label: 'Projects',
                        required: true,
                        relationTo: 'projects',
                        admin: {
                        }
                    },
                ]
            },

        ],
};

export default ProjectsOrderGlobal;

