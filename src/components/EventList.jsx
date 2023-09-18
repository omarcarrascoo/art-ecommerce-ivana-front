import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { mobile } from '../assets/style/responsive';
import events from '../data/events'
import EventListItem from './EventListItem';

const EventListSection = styled.section`
    margin: 0 auto;
    width: 85%;
    padding-top: 30px;
    ${mobile({padding: 0})}
`;
function EventList() {
  const [products, setProducts] = useState([])
  const fetchEvents = () => {
    try {
      fetch ('https://ivanatovillaart.com/api/events/')
      .then(response =>{
        return response.json()
      })
      .then(data =>{
        setProducts(data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchEvents()
  })
  return (
    <EventListSection>
        {products.map((item) =>(
            <EventListItem item={item} key={item._id} />
        ))}
    </EventListSection>
  )
}

export default EventList
