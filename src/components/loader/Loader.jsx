import React from 'react'
import style from './loader.module.css'
export default function Loader() {
    return (
        <div className="text-center">
            <div className={`spinner-border ${style.loader}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
