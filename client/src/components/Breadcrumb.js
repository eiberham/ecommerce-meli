import React from 'react';

const renderElements = (elements, hide) => {
    if(!elements || hide){
        return <li></li>
    }

    return elements.map( element =>{
        return (
            <li className="breadcrumb-item" key={element.toString()}>
                {element}
            </li>
        )
    })
}

const Breadcrumb = ({elements, hide}) => {
    return (
        <div className="breadcrumb-box">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    {renderElements(elements, hide)}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb;