"use client";

import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

type MapProps = {
    latitude: number;
    longitude: number;
    zoom: number;
}

const Map:React.FC<MapProps> = ({latitude, longitude, zoom}) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current as HTMLElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center:[longitude, latitude],
            zoom:zoom,
        });
    
        new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

        return () => map.remove();
    }, [latitude, longitude, zoom]);

    return <div ref = {mapContainerRef} style={{width: '100%', height: '500px'}} />
}

export default Map;