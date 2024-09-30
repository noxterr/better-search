import React from 'react'
import { createRoot } from "react-dom/client"

const Popup = () => {
    return (
        <div>
            <h1>Popup</h1>
        </div>
    )
}


const container = document.getElementById("app")!
const root = createRoot(container)
root.render(<Popup />)