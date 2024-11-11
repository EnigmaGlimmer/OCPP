"use client";

import SearchBox from "@/components/maps/SearchBox";
import ChargerModel from "@/types/ChargerModel";

interface MapViewerProps {
    data: ChargerModel[];
}

const Footer:React.FC<MapViewerProps> = ({data}) => {
    return (
        <div className="footer">
            <SearchBox />
        </div>
    );
}

export default Footer;