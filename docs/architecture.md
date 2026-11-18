# Architecture: json-sea

## What this project is
`json-sea` is a comprehensive JSON editor and viewer application built with TypeScript. It provides a rich interface for users to interact with JSON data, including editing, viewing, and navigating complex JSON structures.

## How it is laid out
The project is organized into several directories, each serving a specific purpose:
- `app/`: Contains the main application logic and entry points.
- `src/`: Holds the core source code, divided into various modules.
- `src/api/`: Includes API components for interacting with JSON data.
- `src/foundation/`: Contains foundational components and utilities.
- `src/json-diagram/`: Focuses on visualizing JSON data as diagrams.
- `src/json-editor/`: Provides the user interface for editing JSON.
- `src/node-detail/`: Manages the display and interaction with individual JSON nodes.
- `src/services/`: Houses utility services.
- `src/settings/`: Manages application settings.
- `src/store/`: Manages the application state using a state management library.
- `src/ui/`: Includes reusable UI components.
- `src/utils/`: Contains utility functions and hooks.

## Key modules
| Module Name | Path | Commits | Bug Fixes |
|-------------|------|---------|-----------|
| JsonDiagram | src/json-diagram/components/JsonDiagram.tsx | 24 | 2 |
| NodeDetailPanelHeader | src/node-detail/components/NodeDetailPanelHeader.tsx | 13 | 1 |
| ObjectNodeProperty | src/json-diagram/components/ObjectNodeProperty.tsx | 13 | 2 |
| json-parser.helper | src/store/json-engine/helpers/json-parser.helper.ts | 13 | 0 |
| NodeDetailPanel | src/node-detail/components/NodeDetailPanel.tsx | 12 | 3 |
| NodeShell | src/json-diagram/components/NodeShell.tsx | 10 | 2 |
| PrimitiveNode | src/json-diagram/components/PrimitiveNode.tsx | 10 | 0 |
| ArrayNode | src/json-diagram/components/ArrayNode.tsx | 9 | 0 |
| JsonEditorConsole | src/json-editor/components/JsonEditorConsole.tsx | 9 | 2 |
| StringInspector | src/node-detail/primitive/components/StringInspector.tsx | 9 | 0 |
| providers | app/providers.tsx | 9 | 0 |
| sea-node.type | src/store/json-engine/types/sea-node.type.ts | 9 | 0 |
| ArrayItemCard | src/node-detail/array/components/ArrayItemCard.tsx | 8 | 0 |
| ImageViewer | src/node-detail/primitive/components/ImageViewer.tsx | 8 | 1 |
| ImportJsonModal | src/json-editor/components/ImportJsonModal.tsx | 8 | 1 |
| JsonSeaLogoTitle | src/foundation/components/JsonSeaLogoTitle.tsx | 8 | 1 |
| MIMETypeAndSize | src/node-detail/primitive/components/MIMETypeAndSize.tsx | 8 | 1 |
| ObjectNode | src/json-diagram/components/ObjectNode.tsx | 8 | 0 |
| ArrayNodeDetail | src/node-detail/array/components/ArrayNodeDetail.tsx | 7 | 0 |
| DefaultEdge | src/json-diagram/components/DefaultEdge.tsx | 7 | 0 |
| GlobalNav | src/foundation/components/GlobalNav.tsx | 7 | 1 |
| JsonEditor | src/json-editor/components/JsonEditor.tsx | 7 | 1 |
| NodeDetailCard | src/node-detail/components/NodeDetailCard.tsx | 7 | 1 |
| PreviewOgMeta | src/node-detail/primitive/components/PreviewOgMeta.tsx | 7 | 1 |
| PropertyCard | src/node-detail/object/components/PropertyCard.tsx | 7 | 0 |
| TextCopyBox | src/node-detail/primitive/components/TextCopyBox.tsx | 7 | 3 |
| ArrayItemPrimitiveCard | src/node-detail/array/components/ArrayItemPrimitiveCard.tsx | 6 | 0 |
| AudioViewer | src/node-detail/primitive/components/AudioViewer.tsx | 6 | 1 |
| CircleTransparentButton | src/ui/components/CircleTransparentButton.tsx | 6 | 1 |
| Copyright | src/foundation/components/Copyright.tsx | 6 | 1 |
| DetailPrimitive | src/node-detail/components/DetailPrimitive.tsx | 6 | 0 |
| DownloadImageButton | src/json-diagram/components/DownloadImageButton.tsx | 6 | 0 |
| GithubButton | src/foundation/components/GithubButton.tsx | 6 | 0 |
| InferredLatLngMapCard | src/node-detail/object/components/InferredLatLngMapCard.tsx | 6 | 2 |
| JsonEditorToggle | src/foundation/components/JsonEditorToggle.tsx | 6 | 0 |
| JsonValidityStatus | src/json-editor/components/JsonValidityStatus.tsx | 6 | 1 |
| PreviewDatetime | src/node-detail/primitive/components/PreviewDatetime.tsx | 6 | 1 |
| environment | src/environment.ts | 6 | 1 |
| sizes.constant | src/ui/constants/sizes.constant.ts | 6 | 0 |
| CustomMiniMap | src/json-diagram/components/CustomMiniMap.tsx | 5 | 1 |
| DragDropJsonFile | src/json-editor/components/DragDropJsonFile.tsx | 5 | 0 |
| DetailObject | src/node-detail/components/DetailObject.tsx | 4 | 0 |
| EmptyNodeMessage | src/node-detail/components/EmptyNodeMessage.tsx | 4 | 1 |
| HoveringBlueDot | src/json-diagram/components/HoveringBlueDot.tsx | 4 | 1 |
| Icon | src/ui/icon/Icon.tsx | 4 | 1 |
| LandingLoader | src/foundation/components/LandingLoader.tsx | 4 | 0 |
| Main | src/foundation/components/Main.tsx | 4 | 1 |
| MediaViewerBox | src/node-detail/primitive/components/MediaViewerBox.tsx | 4 | 1 |
| NodeDetailChip | src/node-detail/components/NodeDetailChip.tsx | 4 | 0 |
| ... and 87 more

## Recent bug-fix commits
The following commits address issues in the areas that have recently broken:
- `d5ed0e6ed39f3d1aba9e34fea7d948d987de7169`
- `abac21f76