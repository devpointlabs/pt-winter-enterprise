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
            Ad qui convenire liberavisse, vide referrentur ei sea.
          </TagH1>
        </div>
        <CustomHR />
        <div style={{ margin: '75px 0px', display: 'flex', justifyContent: 'center' }}>
          <Mission>
            Lorem ipsum dolor sit amet, eum ut putent assentior. Cu diceret honestatis nec. His esse nostrud vivendum no, mei ornatus scribentur liberavisse et. Everti detraxit te qui, usu ei omnis abhorreant disputationi, ubique quidam an est. No oratio verear cum, ius eu falli explicari.
            Minim debet ubique ea duo, in eum impetus vulputate. Iudico sapientem constituto no quo, tempor gubergren nam ne, minimum repudiare necessitatibus in vel. Has liber vitae dissentias at, omnium impedit iracundia cu duo. Ius ne eruditi noluisse tincidunt.
            Ut alii molestie qui, alii ferri nobis no has. Sonet constituto no has, ne quo malorum adipiscing. Te eligendi accusata eleifend vim, te mel dolorum erroribus elaboraret, eu mel meis dicit quodsi. Luptatum vivendum in qui, augue integre corrumpit quo at. Mei et paulo vivendo consequuntur, alterum blandit volutpat eum et.
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
