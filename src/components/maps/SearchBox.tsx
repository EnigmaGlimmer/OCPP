"use client";

import AddModal from "./AddModal";

const SearchIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
);

const SearchBox = () => {
    return (
        <div className="flex-center max-w-lg w-4/5">
            <div className="relative w-full flex-center pr-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <SearchIcon />
                </div>
                <input 
                    type="text"
                    className="block w-full px-3 py-2 ps-9 focus:outline-none focus:border-foreground focus:ring-foreground focus:ring-1 placeholder-green-700"
                    placeholder="Find a device..."
                    required
                />
                <AddModal />
            </div>
        </div>
    );
}

export default SearchBox;