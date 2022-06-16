import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <h1 className="font-bold text-3xl text-gray-900">Hello,<p/> React + Vite + TailwindCSS</h1>
                <div className="text-6xl text-red-600">{count}</div>
                <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button" onClick={() => setCount((count) => count + 1)}>
                    count+
                </button>
            </div>
        </div>
    )
}
export default Counter;