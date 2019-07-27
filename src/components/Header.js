import React from 'react';

const Header = (props) => {
    return(
        <div className="header">
            <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.Subtitle && <h2 className="header__subtitle">{props.Subtitle}</h2>}
            </div>
            
        </div>
    )
}

Header.defaultProps = {
    title: 'Some default'
}
export default Header;