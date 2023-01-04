'use client';

import { Card, Grid, styled } from '@nextui-org/react';
import L, { LatLngTuple } from 'leaflet';
import { ComponentProps, memo, useCallback, useEffect, useRef } from 'react';
import { PropertyKeyBadge } from './PropertyKeyBadge';

type Props = {
  latPropertyK: string;
  lngPropertyK: string;
  latLng: LatLngTuple;
};

const _InferredMapCard = ({ latPropertyK, lngPropertyK, latLng }: Props) => {
  const leafletMapRef = useRef<HTMLDivElement | null>(null);

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

  // TODO: Styling
  return (
    <Card>
      <Card.Header>
        <Grid.Container direction="column">
          <Grid>
            <PropertyKeyBadge propertyK={latPropertyK} /> + <PropertyKeyBadge propertyK={lngPropertyK} />
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Body css={{ paddingTop: '$sm' }}>
        <StyledMap ref={leafletMapRef} />
      </Card.Body>
    </Card>
  );
};

const StyledMap = styled('div', {
  width: '100%',
  height: '240px',
});

export const InferredMapCard = memo(_InferredMapCard);
export type InferredMapCardProps = ComponentProps<typeof InferredMapCard>;
