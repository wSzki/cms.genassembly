// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import AboutPage from './globals/About'
import PressPageGlobal from './globals/Press'
import Contact from './globals/Contact'
import FeaturedIn from './collections/FeaturedIn'
import Press from './collections/Press'
import Projects from './collections/Projects'
import AllProjects from './globals/AllProjects'
import ProjectsPage from './globals/Projects'
import Landing from './globals/Landing'
import { s3Storage } from '@payloadcms/storage-s3'
import Logo from './components/Logo'
import Icon from './components/Icon'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
      cors: '*',
    admin: {
        user: Users.slug,
        meta: {
            titleSuffix: 'General Assembly',
            // icons: [
            //     {
            //         rel: 'icon',
            //         type: 'image/svg+xml',
            //         url: 'https://images.ctfassets.net/e33gel9cusb6/28H2J4mMy0mB4hrFs74DsQ/98516e00a22c2944c7811228a1c3f2e9/largeIcon.jpg',
            //     },
            //     {
            //         rel: 'apple-touch-icon',
            //         type: 'image/png',
            //         url: 'https://images.ctfassets.net/e33gel9cusb6/28H2J4mMy0mB4hrFs74DsQ/98516e00a22c2944c7811228a1c3f2e9/largeIcon.jpg',
            //     },
            // ],
        },
        // Add custom graphics components
        components: {
            // beforeLogin: ['/components/Icon'],
            beforeDashboard: ['/components/Logo'],
            afterDashboard: ['/components/test.tsx'],
            afterNavLinks: ['/components/nav.tsx'],
            graphics: {
                Logo: '/components/Logo',
                Icon: '/components/Icon',
            },
        },
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [Projects, Press, Media, Users],
    globals: [
        Landing,
        AllProjects,
        // Contact,
        PressPageGlobal,
        AboutPage,
    ],

    editor: lexicalEditor({ features: [] }),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    // db: mongooseAdapter({
    //     url: process.env.DATABASE_URI || '',
    // }),
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
        connectOptions: {
            maxPoolSize: 10,
            minPoolSize: 2,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            maxIdleTimeMS: 10000,
        },
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        s3Storage({
            collections: {
                media: {
                    generateFileURL: ({ filename }) =>
                        `${process.env.S3_PUBLIC_ENDPOINT || ''}/${filename}`,
                },
            },
            bucket: process.env.S3_BUCKET || '',

            config: {
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
                },
                forcePathStyle: false,
                region: process.env.S3_REGION || '',
                endpoint: process.env.S3_ENDPOINT || '',
            },
        }),
        // storage-adapter-placeholder
    ],
})
