import React from 'react';
import styled from 'styled-components';
import HeroImage from '../images/hero.jpeg';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Hero>
          <HeroText>
            <HeroH1>Enterprise International</HeroH1>
          </HeroText>
        </Hero>
        <div style={{ margin: '75px 0px', display: 'flex', justifyContent: 'center' }}>
          <TagH1>
            Enterprise International Travel Group
          </TagH1>
        </div>
        <CustomHR />
        <div style={{ margin: '75px 0px', display: 'flex', justifyContent: 'center' }}>
          <Mission>
            A travel agency is a private retailer or public service that provides travel and tourism related services to the public on behalf of suppliers such as activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, and package tours. In addition to dealing with ordinary tourists, most travel agencies have a separate department devoted to making travel arrangements for business travelers; some travel agencies specialize in commercial and business travel only. There are also travel agencies that serve as general sales agents for foreign travel companies, allowing them to have offices in countries other than where their headquarters are located.
          </Mission>
        </div>
        <CustomHR />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', color: '#5f6060' }}>© LLC 2018</div>
      </div>
    )
  }

}

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${HeroImage});
  height: 95vh;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // position: relative;
`

const HeroText = styled.div`
  top: 50%;
  left: 50%;
  color: white;
`
const Mission = styled.div`
  width: 50%;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  @media (max-width: 725px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`

const HeroH1 = styled(HeroText)`
  font-size: 60px;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    line-height: 50px;
  }
`

const TagH1 = styled.h1`
  @media (max-width: 535px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`

const CustomHR = styled.hr`
  height: 1px;
  width: 90%;
  border: 0;
  border-top: 1px solid #ccc;
`

export default Home;
