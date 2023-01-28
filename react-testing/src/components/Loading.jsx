import React from "react";
import './loading.css'
export default function Loading() {
  return (
    <div className='loading'>
        <div className="loadingw">
            <div className="loading__bar"></div>
            <div className="loading__move"></div>
        </div>
    </div>
  );
}