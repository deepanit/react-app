import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './loadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMessage}) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMessage) {
        return (
            <h4>{errMessage}</h4>
        );
    } else {
        let imageUrl = item ? baseUrl + item.image : '';
        let imageName = item ? item.name : '';
        let imageDesignation = item ? item.designation : '';
        let imageDescription = item ? item.description : '';
        return (
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }} >
                <Card>
                    <CardImg src={imageUrl} alt={imageName} />
                    <CardBody>
                        <CardTitle>{imageName}</CardTitle>
                        {imageDesignation ? <CardSubtitle>{imageDesignation}</CardSubtitle> : null}
                        <CardText>
                            {imageDescription}
                        </CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        errMessage={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.promotion}
                        isLoading={props.promosLoading}
                        errMessage={props.promosErrMess} />
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.leader}
                        isLoading={props.leadersLoading}
                        errMessage={props.leadersErrMess} />
                </div>
            </div>
        </div>
    )
}

export default Home;