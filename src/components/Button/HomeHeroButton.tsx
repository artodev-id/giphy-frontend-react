import React from 'react'
import { Card } from '../Card'
import { BiCategoryAlt } from 'react-icons/bi';
import { FiArrowRight } from 'react-icons/fi';
import './styles.scss';
import { Link, LinkProps } from 'react-router-dom';



type HeroButtonTypes = {
    icon: React.ReactElement | React.ReactNode;
    children? : React.ReactNode;
    label : string;
    actionText: string;
    to: LinkProps['to']
}

export const HomeHeroButton:React.FC<HeroButtonTypes> = (props) => {
    return(
        <Card>
            <div className='px-5 py-3 group hero-button'>
                <div className='button-label'>
                    <span className='icon'>
                        {props.icon}
                    </span>
                    <p>{ props.label }</p>
                </div>
                <div className='action-pane'>
                    <Link to={props.to} className='action'>
                        {props.actionText}
                        <span className='ml-2 '>
                            <FiArrowRight/>
                        </span>
                    </Link>
                </div>
            </div>
        </Card>
    )
}