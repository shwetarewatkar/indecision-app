import React from 'react';

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.Subtitle && <h2>{props.Subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Some default'
}
export default Header;