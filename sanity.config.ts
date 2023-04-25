import {defineConfig, StudioLogo} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './styles/theme';
import StudioNavbar from './app/components/StudioNavbar';
import Logo from './app/components/Logo';
import { getDefaultDocumentNode } from './structure';


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: "nurez_Content_studio",
  title: "Nurez Content Studio",
  projectId : projectId as string,
  dataset : dataset as string,
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio : {
    components : {
      logo: Logo,
      navbar: StudioNavbar,
      
    }
  },
  theme : myTheme
})
