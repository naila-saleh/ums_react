import React from 'react'
import './loader.css'
export default function Loader() {
    return (
        <div className="text-center">
            <div className="spinner-border loader" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
