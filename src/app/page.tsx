"use client";

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import MapViewer from "@/components/maps/MapViewer";
import GlobalLayout from "@/components/layouts/GlobalLayout";

import data from "@/utils/test.json";
import ChargerModel from "@/types/ChargerModel";

const Home:React.FC = () => {
    const chargers = data.fuel_stations as ChargerModel[];

    return (
        <GlobalLayout title = "Home">
            <Header />
            <MapViewer data={chargers}/>
            <Footer data={chargers}/>
        </GlobalLayout>
    );
};

export default Home;