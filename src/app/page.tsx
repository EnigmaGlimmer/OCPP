import React from "react";
//import Map from '../components/Map';
import GlobalLayout from "@/components/layouts/GlobalLayout";
import HomeHeader from "@/components/global/Header";
import MapViewer from "@/components/maps/MapViewer";

import data from "@/utils/test.json";
import ChargerModel from "@/types/ChargerModel";
import Footer from "@/components/global/Footer";

const Home:React.FC = () => {
    const chargers = data.fuel_stations as ChargerModel[];

    return (
        <GlobalLayout title = "Home">
            <HomeHeader />
            <MapViewer data={chargers}/>
            <Footer />
        </GlobalLayout>
    );
};

export default Home;