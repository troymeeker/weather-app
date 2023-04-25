import React from 'react'
import { useState } from 'react';

function DarkToggle() {
    const [dark, setDark] = useState('Dark')

    function DarkMode(){
        setDark("Light")


    }


  return (
    <div>
        <button onClick={DarkMode}>{dark} Mode</button>
    </div>
  )
}

export default DarkToggle;