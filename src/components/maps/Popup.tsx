import ChargerModel from "@/types/ChargerModel";
import Property from "@/types/Property";
import UserModel from "@/types/UserModel";

interface PopupProps {
    title?: string;
    cta?: string;
    open?: boolean;
    data?: ChargerModel[] | UserModel[] | Property[];
    onClose?: () => void;
    addStation?: () => void;
    children?: React.ReactNode;
    styles?: string;
};

const Popup: React.FC<PopupProps> = ({title, cta, onClose, addStation, children, styles = ""}) => {
    return (
        <div className={"absolute left-full bottom-0 group card px-4 py-2 min-w-60 " + styles}>
            <div id="title+close" className="flex-center w-full z-10 justify-between pb-3">
                <p className="text-base">{title}</p>
                <button className="outlined text-2xl p-0" onClick={onClose}>x</button>
            </div>

            {children}

            <div id="title+close" className="flex-center w-full z-10 justify-end pt-3">
                <p className="absolute left-4 bottom-2">+</p>
                <div className="outlined p-0 cursor-pointer" onClick={addStation}>{cta}</div>
            </div>
        </div>
    );
}

export default Popup;