import { GlobalNav } from '../src/foundation/components/GlobalNav';
import { Main } from '../src/foundation/components/Main';
import { JsonDiagram } from '../src/json-diagram/components/JsonDiagram';
import { JsonEditor } from '../src/json-editor/JsonEditor';
import { NodeDetailPanel } from '../src/node-detail/components/NodeDetailPanel';

const RootPage = () => {
  return (
    <>
      <GlobalNav />

      <Main>
        <JsonEditor />
        <JsonDiagram />
        <NodeDetailPanel />
      </Main>
    </>
  );
};

export default RootPage;
