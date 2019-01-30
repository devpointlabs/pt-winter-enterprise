import React from 'react';
import styled from 'styled-components';
import BobImage from '../images/Yellow.jpeg';

class About extends React.Component {

    render() {
        return (
            <div>
                <Bob>
                    <BobText>
                        <BobH1>About Enterprise International</BobH1>
                    </BobText>
                </Bob>
                <div style={{ margin: '75px 0px', display: 'flex', justifyContent: 'center' }}>
                    <TagH1>
                        About Enterprise International
                    </TagH1>
                </div>
                <CustomHR />
                <div style={{ margin: '75px 0px', display: 'flex', justifyContent: 'center' }}>
                    <Mission>

                        Yellowstone National Park is an American national park located in Wyoming, Montana, and Idaho. It was established by the U.S. Congress and signed into law by President Ulysses S. Grant on March 1, 1872.[5][6] Yellowstone was the first national park in the U.S. and is also widely held to be the first national park in the world.[7] The park is known for its wildlife and its many geothermal features, especially Old Faithful geyser, one of its most popular features.[8] It has many types of ecosystems, but the subalpine forest is the most abundant. It is part of the South Central Rockies forests ecoregion.leifend vim, te mel dolorum erroribus elaboraret, eu mel meis dicit quodsi. Luptatum vivendum in qui, augue integre corrumpit quo at. Mei et paulo vivendo consequuntur, alterum blandit volutpat eum et.
                    </Mission>
                </div>
                <CustomHR />
                <div style={{ margin: '75px 0px', display: 'flex', justifyContent: 'center' }}>

                    <TagH1>
                        History Enterprise International
                    </TagH1>
                </div>
                <CustomHR />
                <div style={{ margin: '75px 0px', display: 'flex', justifyContent: 'center' }}>
                    <Mission>

                        The Lake Hotel is one of a series of hotels built to accommodate visitors to Yellowstone National Park in the late 19th and early 20th century. Built originally in 1891, it was re-designed and substantially expanded by Robert Reamer, architect of the Old Faithful Inn in 1903. In contrast to the Old Faithful Inn, the Lake Hotel is a relatively plain clapboarded Colonial Revival structure with three large Ionic porticoes facing Yellowstone Lake.
                    </Mission>
                </div>
                <CustomHR />
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', color: '#5f6060' }}>© LLC 2018</div>
            </div>
        )
    }

}

const Bob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${BobImage});
  height: 95vh;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const BobText = styled.div`
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

const BobH1 = styled(BobText)`
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

export default About;
