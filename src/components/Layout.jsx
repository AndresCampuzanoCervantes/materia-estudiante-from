import React from 'react'
import Menubar from './menubar'

const Layout = ({ children }) => {
    return (
        <div className='ui four column grid'>
            <div className='row' style={{paddingBottom:0}}>
                <Menubar className="column"/>
                <div className='column thirteen wide'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout