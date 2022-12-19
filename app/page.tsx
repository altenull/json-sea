import GlobalNav from '../src/foundation/components/GlobalNav';
import JsonDiagram from '../src/json-diagram/components/JsonDiagram';
import { NodeDetailFixedPanel } from '../src/json-diagram/components/NodeDetailFixedPanel';
import JsonEditor from '../src/json-editor/JsonEditor';

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
