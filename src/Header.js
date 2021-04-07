import React from 'react'
import styled from 'styled-components'
import ImageAvatar from './assets/images/Image 1.png'
import ImgTimeNow from './assets/images/20 links.svg'
import ImgTimeFut from './assets/images/20 rechts.svg'
import IconCal from './assets/images/Icon awesome-calendar-alt.svg'
import LogOutB from './assets/images/Path 1.svg'
import LogoFooter from './assets/images/FM-logo.png'


function Header() {
  return (
    <Container>
      <MainHeaderLineOne>
          <AvatarPhoto>
            <img src={ImageAvatar} />
          </AvatarPhoto>
          <AvatarName>
            Laurens
          </AvatarName>
      </MainHeaderLineOne>

      <MainHeaderLineTwo>
          <JaarNow>
            <img src={ImgTimeNow} />
            <img src={ImgTimeFut} />
          </JaarNow>
          <JaarPlanning>
            Jaar-Planning
          </JaarPlanning>
      </MainHeaderLineTwo>

      <MainHeaderLineThree>
          <IconAgenda>
            <img src={IconCal} />
          </IconAgenda>
          <AgendaTxt>Agenda</AgendaTxt>
      </MainHeaderLineThree>

      <MainHeaderLineFour>
          <IconButton>
            <img src={LogOutB} />
          </IconButton>
          <LogOutWord>Uitloggen</LogOutWord>
      </MainHeaderLineFour>

      <MainHeaderLineFive>
          <img src={LogoFooter} />
      </MainHeaderLineFive>
    </Container>
  )
}

export default Header

const Container = styled.div`
  margin-top: -33px;
  margin-left: -33px;
  top: 0px;
  left: 0px;
  width: 225px;
  height: 1200px;
  background: #203250 0% 0% no-repeat padding-box;
  opacity: 1;
`

const MainHeaderLineOne = styled.div`
  padding-left: 20px;
  display: flex;
  padding-top: 50px;
  width: 205px;
  height: 75px;
  opacity: 1;
  margin-bottom: 300px;
`
const AvatarPhoto = styled.div`

img {
  top: 58px;
  left: 15px;
  width: 60px;
  height: 60px;
  border: 2px solid #ED6F1B;
  opacity: 1;
  border-radius: 50px;
}
`
const AvatarName = styled.div`
  padding-top: 22px;
  padding-left: 25px;
  width: 75px;
  height: 27px;
  text-align: left;
  font: italic medium 19px/20px Poppins;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  font-size: 20px;
`


const MainHeaderLineTwo = styled.div`
  margin-top: 80px;
  padding-left: 20px;
  display: flex;
  top: 290px;
  left: 0px;
  width: 225px;
  height: 60px;
  margin-bottom: 30px;

:hover {
  background: #FFFFFF33 0% 0% no-repeat padding-box;
  opacity: 1; 
}

`
const JaarNow = styled.div`
  padding-top: 11px;
  display: flex;
  top: 303px;
  left: 10px;
  width: 31px;
  height: 35px;
  opacity: 1;
`

const JaarPlanning = styled.div`
  padding-top: 9px;
  margin-left: 50px;
  top: 293px;
  left: 91px;
  width: 113px;
  height: 55px;
  text-align: left;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  font-size: 20px;
`


const MainHeaderLineThree = styled.div`
  padding-left: 20px;
  display: flex;
  top: 380px;
  left: 0px;
  width: 225px;
  height: 60px;
  margin-bottom: 30px;

:hover {
  background: #FFFFFF33 0% 0% no-repeat padding-box;
  opacity: 1; 
}
`
const IconAgenda = styled.div`
  padding-top: 6px;
  top: 387px;
  left: 21px;
  width: 40px;
  height: 45px;
  padding-left: 2px;
`
const AgendaTxt = styled.div`
  padding-top: 16px;
  margin-left: 36px;
  top: 293px;
  left: 91px;
  width: 113px;
  height: 55px;
  text-align: left;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  font-size: 20px;
`


const MainHeaderLineFour = styled.div`
  padding-left: 20px;
  display: flex;
  top: 470px;
  left: 0px;
  width: 225px;
  height: 60px;
  margin-bottom: 30px;
  align-content: center;

:hover {
  background: #FFFFFF33 0% 0% no-repeat padding-box;
  opacity: 1; 
}
`
const IconButton = styled.div`
  padding-top: 10px;
  top: 483px;
  left: 24px;
  width: 34px;
  height: 34px;
  padding-left: 5px;
`
const LogOutWord = styled.div`
  padding-top: 16px;
  margin-left: 36px;
  top: 293px;
  left: 91px;
  width: 113px;
  height: 55px;
  text-align: left;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  font-size: 20px;
`

const MainHeaderLineFive = styled.div`

img {
  margin-top: 390px;
  margin-left: 10px;
  top: 713px;
  left: 10px;
  width: 205px;
  height: 87px;
}
`