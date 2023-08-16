import React from 'react';
import { PageWrapper, Card, HomeHeroButton } from '@/components';
import { FiArrowRight } from 'react-icons/fi'
import { BiCategoryAlt } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi'


export default class Home extends React.Component{
    render(){
        return(
            <PageWrapper title='Welcome to your Giphy' heroClass='flex flex-col justify-between'>
                <div className='container h-100 mb-100'>
                    <div className='hero-section-landing'>
                        <div className='grid grid-cols-1 gap-4'>
                            <HomeHeroButton 
                                to={'/giphy'}
                                icon={<BiCategoryAlt/>} 
                                actionText='Explore' 
                                label='My Iron Man'
                            />
                            <HomeHeroButton 
                                to={'/explore'}
                                icon={<FiSearch/>} 
                                actionText='Search' 
                                label='Search Giphy'
                            />
                        </div>
                    </div>
                </div>
            </PageWrapper>
        )
    }
}