import { Metadata } from 'next';
import { GlobalNav } from '../src/foundation/components/GlobalNav';
import { LandingLoader } from '../src/foundation/components/LandingLoader';
import { LocalhostBadge } from '../src/foundation/components/LocalhostBadge';
import { Main } from '../src/foundation/components/Main';
import { JsonDiagram } from '../src/json-diagram/components/JsonDiagram';
import { ResizableJsonEditor } from '../src/json-editor/components/ResizableJsonEditor';
import { NodeDetailPanel } from '../src/node-detail/components/NodeDetailPanel';
import './index.css';

const TITLE = 'JSON Sea';
const DESCRIPTION = '🌊 Dive deep into the JSON Sea!';
const OG_IMAGE_URL = 'https://raw.githubusercontent.com/altenull/json-sea/main/public/og-image.png';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://jsonsea.com',
    siteName: 'JSON SEA',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

const RootPage = () => {
  return (
    <>
      <LandingLoader />

      <GlobalNav />

      <Main>
        <ResizableJsonEditor />
        <JsonDiagram />
        <NodeDetailPanel />
      </Main>

      <LocalhostBadge />
    </>
  );
};

export default RootPage;
