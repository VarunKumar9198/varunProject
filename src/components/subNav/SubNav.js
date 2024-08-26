import React from 'react'
import './SubNav.css'
import { Container } from 'react-bootstrap'

const subNavData = [
    {
        id: 1,
        data: 'SPY x FAMILY Nuevo Episodio'
    },
    {
        id: 2,
        data: 'All Saints Street Primer Episodio'
    },
    {
        id: 3,
        data: 'My Hero Academia T6'
    },
    {
        id: 4,
        data: 'BLUE LOCK'
    },
    {
        id: 5,
        data: 'The daily Life of the Immortal T3'
    },
    {
        id: 6,
        data: 'Raven of the Inner Palace'
    }
]

const SubNav = () => {
    return (
        <Container>
            <div className='subNavRow'>
                {
                    subNavData.map((item, index) => {
                        return (
                            <div key={index} className={`subNavListBox subNavListBox${index+1}`}>
                                <p className='subnavList m-0'>{item?.data}</p>
                            </div>

                        )
                    })
                }    </div>
        </Container>

    )
}

export default SubNav