import React from 'react'
import "../Styles/Tabs.css"

export default function Tabs( {tab, changeTab } ) 
{
    return (
        <div className="tab-container">
        <div className="tab-control">
          <p className={tab === "Pending" ? "tab-group__tabs bold" : 'tab-group__tabs '} 
          onClick={() => changeTab("Pending")}>
            Pending
          </p>
          <p
            className={tab !== "Pending" ? "tab-group__tabs completed-tab bold" : 'tab-group__tabs completed-tab '} 
            onClick={() => changeTab("Completed")}>
            Completed
          </p>
      </div>
    </div>
    )
}
