# Module: LeafletMap

**File:** `\src\node-detail\object\components\LeafletMap.tsx`

## Overview

Module `LeafletMap` contains 0 analyzed entities.

```
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { memo, useCallback, useEffect, useRef } from 'react';

type Props = {
  latLng: LatLngTuple;
};

const _LeafletMap = ({ latLng }: Props) => {
  const leafletMapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    L.Marker.prototype.setIcon(
      L.icon({
        iconUrl: '/map-marker.png',
      }),
    );
  }, []);

  const isLeafletInitialized = useCallback((leafletMapElement: HTMLDivElement): boolean => {
    const mapContainer: HTMLElement | null = L.DomUtil.get(leafletMapElement);
    return (mapContainer as any)._leaflet_id !== undefined;
  }, []);

  const addTileLayer = useCallback((leafletMap: L.Map) => {
    const attribution: string = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution,
    }).addTo(leafletMap);
  }, []);

  useEffect(() => {
    if (!leafletMapRef.current) return;

    const leafletMapElement: HTMLDivElement = leafletMapRef.current;

    if (isLeafletInitialized(leafletMapElement)) {
      return;
    }

    const leafletMap: L.Map = L.map(leafletMapElement, {
      center: latLng,
      zoom: 12,
      preferCanvas: true,
    });

    addTileLayer(leafletMap);
    L.marker(latLng).addTo(leafletMap);

    return () => {
      leafletMap.off();
      leafletMap.remove();
    };
  }, [latLng, isLeafletInitialized, addTileLayer]);

  return <div className="z-0 h-[240px] w-full" ref={leafletMapRef} />;
};

export default memo(_LeafletMap);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 3
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
