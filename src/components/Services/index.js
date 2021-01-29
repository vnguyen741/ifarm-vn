import React from 'react';
import Icon1 from '../../images/ifarm-2.jpg';
import Icon2 from '../../images/ifarm-2.jpg';
import Icon3 from '../../images/ifarm-2.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Sản Phẩm Của Chúng Tôi</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Trứng Gà iFarm</ServicesH2>
          <ServicesP>
          (Hộp 6 trứng)
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Trứng Gà iFarm (10 trứng)</ServicesH2>
          <ServicesP>
          (Hộp 10 trứng)
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Trứng Gà iFarm (30 trứng)</ServicesH2>
          <ServicesP>
          (Hộp 30 trứng)
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
