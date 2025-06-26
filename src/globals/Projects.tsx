
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
                type:'array',
                name: 'projectsArray',
                label: "Projects",
                required: true,
                admin: {
                    description: 'Select and arrange projects in the order you want them to appear on the page.',
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
                            description: 'Select and arrange projects in the order you want them to appear on the page.'
                        }
                    },
                ]
            },

        ],
};

export default ProjectsOrderGlobal;
