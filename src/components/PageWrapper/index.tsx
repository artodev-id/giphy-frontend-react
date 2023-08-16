import React, { PropsWithChildren, useEffect, useState } from 'react'
import { ThemeToggle } from '../ThemeToggle';
import './styles.scss';
//
type PropTypes = PropsWithChildren & {
    title: string;
    heroClass?: React.HTMLAttributes<HTMLElement>['className']
}
const PageWrapper:React.FC<PropTypes> = ({ title, children, heroClass}) => {   
    return(
        <div className='main'>
            <section className={`hero-page ${heroClass || ''}`} >
                <div className='container'>
                    <div className='hero-section-header'>
                        <h3 className='header-title'>{ title }</h3>
                    </div>
                </div>
                {children}
            </section>
        </div>
    )
}

export default PageWrapper;