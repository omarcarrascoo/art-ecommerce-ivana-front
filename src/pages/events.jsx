import React from 'react'
import styled from 'styled-components'
import EventList from '../components/EventList'
import Footer2 from '../components/footer2'
import Hero2 from '../components/Hero2'
import NavBar from '../components/Navbar'

const Updating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`;
const UpdatingT = styled.p`
  font-size: 28px;
  
`;
function events() {
  return (
    <>
      <NavBar />
      <Hero2 />
      <EventList />
      {/* <Updating>
      <UpdatingT>We are updating our showcases, come back later :)</UpdatingT>
      </Updating> */}
      <Footer2 />
    </>
  )
}

export default events
