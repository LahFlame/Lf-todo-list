import React from "react";
import "./header.styles.css"


const Header = () => {
    const date = new Date().toLocaleDateString("en-US",{
        weekday: "long",
        day: "numeric",
        month: "long"
      });

    return(
        <header className="header">
            <h1>{date}</h1>
        </header>
    )
}

export default Header;