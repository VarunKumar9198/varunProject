import React from 'react'
import './HorizontalCard.css'
import { Col, Container, Row } from 'react-bootstrap'

const HorizontalCard = (props) => {
    const { staticContent } = props;
    return (
        <Container>
            {staticContent.map((item, index) => {
                return (
                    <Row className='align-items-center mt-5'>
                        <Col sm={12} md={4} lg={4}>
                            <img src={item.img} alt="" style={{maxWidth:'100%'}} />
                        </Col>

                        <Col sm={12} md={8} lg={8}>
                            <div className='contentBox'>
                                <h2>{item.title}</h2>
                                <p>{item.subText}</p>
                                <p>{item.desc}</p>
                                <div className='btngroupFlex'>
                                    <button>{item.btnText1}</button>
                                    <button>{item.btnText2}</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                )
            })}
        </Container>
    )
}

export default HorizontalCard