"use client";

import ChargerModel from "@/types/ChargerModel";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

interface MapViewerProps {
    data: ChargerModel[];
}

const MapViewer: React.FC<MapViewerProps> =({data}) => {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current!,
            style:"mapbox://styles/mapbox/dark-v10",
            projection: "globe",
            center: [-100, 40],
            zoom: 2,
            attributionControl: false
        });

        map.on("style.load", () => {
            map.setFog({
                "color": "#000",
                "space-color": "#666",
                "high-color": "#000",
                "horizon-blend": 1,
                "star-intensity": 0
            });
        });

        map.on("load", () => {
            data.forEach((charger) => {
                const el = document.createElement("div");
                el.style.width = "15px";
                el.style.height = "15px";
                el.style.backgroundColor = "#00ff0a";
                el.style.borderRadius = "50%";
                el.style.cursor = "pointer";
    
                const popup = new mapboxgl.Popup({offset: 25});
                const popupHtml = `
                    <div class = "pb-3 pr-5 text-base text-center">${charger.station_name}</div>
                    <div class = "property-container">
                        <p class = "font-bold content-center">Network:</p> <p>${charger.ev_network}</p>
                        <p class = "font-bold content-center">Type:</p> <p>${charger.fuel_type_code}</p>
                        <p class = "font-bold content-center">Number of ports:</p> <p>${charger.ev_connector_types?.length || 0}</p>
                        <p class = "font bold content-center">Connectors:</p> <p>${charger.ev_connector_types?.at(0) || "-"}</p>
                    </div>
                    <div class="pt-3 border-none bg-transparent text-end cursor-pointer">
                        View on OvenVPP Scan
                    </div>
                `;

                new mapboxgl.Marker(el)
                    .setLngLat([charger.longitude, charger.latitude])
                    .setPopup(popup.setHTML(popupHtml))
                    .addTo(map);
            });

            const layers = map.getStyle()?.layers || [];
            layers.forEach((layer) => {
                if(layer.type ==="symbol") {
                    const id = layer.id;
    
                    map.setLayoutProperty(id, "visibility", "visible");
                    map.setLayerZoomRange(id, 11, 24);
                }
            });
        });

        return () => map.remove();
    }, [data]);

    return <div ref={mapContainer} style={{width: "100%", height:"100vh"}}/>;
}

export default MapViewer;