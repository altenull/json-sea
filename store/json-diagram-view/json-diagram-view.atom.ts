import { atom } from 'recoil';
import { JsonDiagramLayout } from './enums/json-diagram-layout.enum';

export const JSON_DIAGRAM_VIEW_PREFIX = '@json-diagram-view';

export const jsonDiagramLayoutAtom = atom<JsonDiagramLayout>({
  key: `${JSON_DIAGRAM_VIEW_PREFIX}/jsonDiagramLayoutAtom`,
  default: JsonDiagramLayout.Vertical,
});
