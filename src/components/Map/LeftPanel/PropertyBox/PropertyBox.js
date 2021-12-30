import { PropertyDiv, ImageDiv, Image, BoxDiv, Address, BottomDiv, LeftDiv, RightDiv, LabelDiv, Labels, Details, Photos } from "./styles";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid' //For Keys
import { getProps } from "../../../../actions/properties";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PropertyBox = ({ labels, details, classes }) => {

    const dispatch = useDispatch();

    const props = useSelector((state) => state.properties);

    useEffect(() => {
        dispatch(getProps());
    },[])


    return (
        <>
        {props.map((prop) => {
            return(
            <PropertyDiv className={classes.propertyBox} key={uuidv4()}>
                <ImageDiv key={uuidv4()}>
                    <Image key={uuidv4()} src={prop.photo} />
                </ImageDiv>
                <BoxDiv key={uuidv4()}>
                    <Address key={uuidv4()}>
                        {prop.address.replace(', USA', '')}
                    </Address>
                    <BottomDiv key={uuidv4()}>
                        <LeftDiv key={uuidv4()}>
                            <LabelDiv key={uuidv4()}>
                                <Labels key={uuidv4()}>
                                    {labels.employee} 
                                </Labels>
                                <Details key={uuidv4()}>  
                                    {prop.name}
                                </Details>
                            </LabelDiv>
                        </LeftDiv>
                    </BottomDiv>
                </BoxDiv>
            </PropertyDiv>
            )
        })

            }
        </>
    )
}

PropertyBox.defaultProps = {
    labels: {
        employee: 'Location: ',
    },
    classes: {
        propertyBox: 'propertyBox'
    }
}

export default PropertyBox
