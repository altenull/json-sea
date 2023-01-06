import { GlobalNav } from '../src/foundation/components/GlobalNav';
import { Main } from '../src/foundation/components/Main';
import { JsonDiagram } from '../src/json-diagram/components/JsonDiagram';
import { ResizableJsonEditor } from '../src/json-editor/components/ResizableJsonEditor';
import { NodeDetailPanel } from '../src/node-detail/components/NodeDetailPanel';

const RootPage = () => {
  return (
    <>
      <GlobalNav />

      <Main>
        <ResizableJsonEditor />
        <JsonDiagram />
        <NodeDetailPanel />
      </Main>
    </>
  );
};

export default RootPage;
