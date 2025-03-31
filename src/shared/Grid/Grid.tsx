import React from "react";

interface GridProps {
    goTopreviousPage?: () => void;
    goTonextPage?: () => void;
    children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ goTopreviousPage, goTonextPage, children }) => (
    <div className="container mx-auto w-100">
        <div className="grid grid-cols-4 gap-3 mx-auto">
            {children}
        </div>
        <div className="flex justify-center mt-4 gap-5">
            {goTopreviousPage &&
                <button onClick={goTopreviousPage}>Previous</button>
            }
            {goTonextPage &&
                <button onClick={goTonextPage}>Next</button>
            }


        </div>
    </div>
)