import { GlobalNav } from '../src/foundation/components/GlobalNav';
import { JsonDiagram } from '../src/json-diagram/components/JsonDiagram';
import { JsonEditor } from '../src/json-editor/JsonEditor';
import { NodeDetailFixedPanel } from '../src/node-detail/components/NodeDetailFixedPanel';

const RootPage = () => {
  return (
    <main>
      <GlobalNav />

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <JsonEditor />
        <JsonDiagram />
      </div>

      <NodeDetailFixedPanel />
    </main>
  );
};

export default RootPage;
