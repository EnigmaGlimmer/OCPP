"use client";
import Image from "next/image";

const HomeHeader = () => {
    
    const handleConnect = () => {

    }

    return (
        <div className="header">
            <Image 
                src="/logo-white.svg"
                alt="openvpp-logo"
                width={180}
                height={48}
            />
            <button
                type="button"
                onClick={handleConnect}
            >
                Connect Wallet
            </button>

        </div>
    );
}

export default HomeHeader;