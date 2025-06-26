


// This file represents a Payload global config for Projects Order
import { GlobalConfig } from 'payload';

const PressPageGlobal: GlobalConfig = {
  slug: 'press-page',
  label: 'All Press Articles',
    access: {
        read: () => true,
    },
        admin: {
            group: 'Global Content',
        },
        fields: [
            {
                type:'array',
                name: 'pressArray',
                label: 'Press Articles',
                labels: {
                    singular: 'Press Article',
                    plural: 'Press Articles',
                },
                required: true,
                admin:{
                    description: 'Select and arrange press articles in the order you want them to appear on the press page.',
                    initCollapsed:true,
                    components: {
                        RowLabel: './components/RowLabelFeature.tsx'
                    },
                },
                fields: [
                    {
                        name: 'pressItem',
                        type: 'relationship',
                        label: 'Press Article',
                        relationTo: 'press',
                        admin: {
                        }
                    },
                ]
            },

        ],
};

export default PressPageGlobal;



