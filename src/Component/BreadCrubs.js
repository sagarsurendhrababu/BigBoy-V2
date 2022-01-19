import React from 'react'

function BreadCrubs(props) {
    return (
        <div>
            <div className="col12 sm4 md8 breadcrumb flexDCC">                
                <h3 className='c7t f3 mb2'>{props.title}</h3>
                <div className="col12 flexCC">
                    <ul className='flex'>
                        <li className='mr'><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BreadCrubs
