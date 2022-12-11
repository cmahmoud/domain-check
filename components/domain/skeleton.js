import React from "react";

export default function Skeleton() {
    return (
        <>
            {[0, 1, 2, 3, 4, 5, 6].map((item) => {
                return (
                    <div
                        key={item}
                        className="animate-pulse bg-zinc-800 p-4 mb-2 rounded-lg flex flex-row items-center justify-between"
                    >
                        <div className="h-3 w-2/6 bg-slate-50 rounded"></div>
                        <span className="h-6 w-6 p-0.5 bg-slate-50 rounded-full"></span>
                    </div>
                );
            })}
        </>
    );
}
