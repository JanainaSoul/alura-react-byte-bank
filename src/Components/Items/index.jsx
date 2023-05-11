import React from "react";
import styled from "styled-components";
import ImageFilter from '../ImageFilter'
import Item from '../Item/Item'


const Items = styled.div`
    box-shadow: 4px 4px 28px 8px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`;

export default (props) => {
    return (
        <Items> 
            {ImageFilter(props.type)}
            <Item {...props} />
            <span> {props.date}</span>
        </Items>
    )
}
