import { useState } from "react";
import Popup from "./Popup";
import Image from "next/image";

const ADDMODAL_STATUS = {
    ADD: "Add",
    ENTER: "Enter",
    CONNECT: "Connect"
};

const AddModal = () => {
    const [currentModalStatus, setCurrentModalStatus] = useState(ADDMODAL_STATUS.ADD);
    // const [newStation, setNewStation] = useState([]);

    const handleAdd = () => {
        setCurrentModalStatus(ADDMODAL_STATUS.ENTER);
    };

    const handleCloseModal = () => {
        setCurrentModalStatus(ADDMODAL_STATUS.ADD);
    };

    const handleAddStation = () => {
        console.log("Enter Clicked!");
        setCurrentModalStatus(ADDMODAL_STATUS.CONNECT);
    }

    const renderAdd = () => {
        return (
        <div className="absolute left-full bottom-0 group">
            <button type="button" className="py-2" onClick={handleAdd}>
                +
            </button>
        </div>
        );
    };

    const renderEnter = () => {
        return (
        <Popup
            title="Add a device"
            cta="ENTER"
            onClose={handleCloseModal}
            addStation={handleAddStation}
        >
            <p className="flex addmodal-item border-0">Type:OCPP 1.6j Charger
                <Image src="/addmodal_key.svg" alt="Addmodal_Key" className="ml-2" width={12} height={12}/>
            </p>
            <input type="text" className="addModal-item" placeholder="e.g., Address"/>
            <input type="text" className="addModal-item" placeholder="e.g., Brand" />
            <input type="text" className="addModal-item" placeholder="e.g., Model" />
        </Popup>
        );
    };

    const renderConnect = () => {
        return (
            <Popup
            title="Add a device"
            cta="CONNECT"
            onClose={handleCloseModal}
        >
            <p>Enter these configuration parameters into the OCPP 1.6J compliant EV charger to connect.</p>
            <p><b>URL:</b> www.openvpp.energy/ocpp</p>
            <p><b>Chargepoint ID:</b>0x12345</p>
            <p><b>Password</b>$yxg6hj</p>
        </Popup>
        );
    };

    switch (currentModalStatus) {
        case ADDMODAL_STATUS.ADD:
            return renderAdd();
        case ADDMODAL_STATUS.ENTER:
            return renderEnter();
        case ADDMODAL_STATUS.CONNECT:
            return renderConnect();
        default: 
            return <></>;
    }
}

export default AddModal;