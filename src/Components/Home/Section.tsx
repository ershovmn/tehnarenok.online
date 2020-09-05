import React from 'react'

import './Section.css'

export interface HomeSectionProps {
    sectionHeader: string,
    img: {
        src: any,
        style: {
            width: string,
            borderRadius?: string,
            marginLeft?: string,
            paddingLeft?: string,
        },
    },
    text: Array<{
        type: string,
        data?: string,
        listData? : Array<string>
    }>,
}

const Section = (props : HomeSectionProps) => {
    return (
        <div className='home-section'>
            <div className='section-header'>
                <h1>
                    {props.sectionHeader}
                </h1>
            </div>
            <div className='sub-section'>
                <div className='left-sub-section'>
                    <img src={props.img.src} style={props.img.style} />
                </div>
                <div className='right-sub-section'>
                    {props.text.map((data, index : number) => {
                        switch (data.type) {
                            case 'p' : return <p>{data.data}</p>
                            case 'h2' : return <h2>{data.data}</h2>
                            case 'ul' : return <ul>{data.listData?.map(item => <li>{item}</li>)}</ul>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Section