import { useState } from "react";
import Popup from "./Popup";

const AddModal = () => {
    const [isOpen, openAddModal] = useState(false);

    const handleCloseModal = () => {
        openAddModal(false);
    }

    const handleAdd = () => {
        openAddModal(!isOpen);
    }

    return (
        <>
            {isOpen ? (
                <Popup
                    open = {isOpen}
                    title="Add a device"
                    cta="ENTER"
                    onClose={handleCloseModal}
                >
                    <div>Type:</div>
                </Popup>
            ): (
                <div className="absolute left-full bottom-0 group">
                    <button type="button" className="py-2" onClick={handleAdd}>
                        +
                    </button>
                </div>
            )}
        </>
    );
}

export default AddModal;