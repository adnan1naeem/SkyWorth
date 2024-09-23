import React from 'react';
import AwardSection from './../../components/Award/cardComponent';
import Image1 from './../../assets/awardImage1.jpg';
import Image2 from './../../assets/awardImage2.jpg';
import Image3 from './../../assets/awardImage3.jpg';
import Image4 from './../../assets/awardImage4.jpg';
import Image5 from './../../assets/Image5.jpg';
import Image6 from './../../assets/awardImage6.jpg';
const App = () => {
  return (
    <>
      <AwardSection
        bgColor="#f5f5f5"
        flexDirection="row-reverse"
        awardImage={Image1?.src}
        awardYear="2018"
        awardTitle="CHINA TOP 10 WASHING MACHINE EXPORT AWARD"
        awardDescription="The China Top 10 Washing Machine Export Award is a prestigious award that recognizes the achievements of Chinese companies in the export of washing machines. It is a testament to the country’s growing capabilities in this field."
        buttonText="Learn More"
      />
      <AwardSection
        bgColor="black"
        flexDirection="row"
        awardImage={Image2?.src}
        awardYear="2022 – 2025"
        awardTitle="AAAA GRADE GOOD STANDARDIZING PRACTICE AWARD"
        awardDescription="The AAAA Grade Good Standardizing Practice Award is a prestigious award that recognizes the achievements of Chinese companies in standardization. It is a testament to the country’s growing capabilities in this field."
        buttonText="Shop Now"
      />
      <AwardSection
        bgColor="#f5f5f5"
        flexDirection="row-reverse"
        awardImage={Image3?.src}
        awardYear="2020 – 2023"
        awardTitle="CHINA QUALITY INSPECTION AWARD"
        awardDescription="The China Quality Inspection Award is a prestigious award that recognizes the achievements of quality inspection organizations. It is a testament to the organization’s commitment to excellence in quality inspection."
        buttonText="Shop Now"
      />
      <AwardSection
        bgColor="black"
        flexDirection="row"
        awardImage={Image4?.src}
        awardYear="2020 – 2023"
        awardTitle="CONSUMER GOOD QUALITY REPUTATION AWARD"
        awardDescription="The Consumer Good Quality Reputation Award is a prestigious award that recognizes the achievements of consumer goods companies. It is a testament to the company’s commitment to excellence in product quality and reputation."
        buttonText="Shop Now"
      />
      <AwardSection
        bgColor="#f5f5f5"
        flexDirection="row-reverse"
        awardImage={Image3?.src}
        awardYear="2020 – 2023"
        awardTitle="LEADING BRAND IN TOP QUALITY MANAGEMENT AWARD"
        awardDescription="The Leading Brand in Top Quality Management Award is a prestigious award that recognizes the achievements of companies in quality management. It is a testament to the company’s commitment to excellence in quality management."
        buttonText="Shop Now"
      />
      <AwardSection
        bgColor="black"
        flexDirection="row"
        awardImage={Image2?.src}
        awardYear="2020 – 2023"
        awardTitle="CHINA QUALITY INSPECTION AWARD"
        awardDescription="The China Quality Inspection Award in Design is a prestigious award that recognizes the achievements of Chinese companies in design. It is a testament to the country’s growing design capabilities."
        buttonText="Shop Now"
      />
      <AwardSection
        bgColor="#f5f5f5"
        flexDirection="row-reverse"
        awardImage={Image1?.src}
        awardYear="2019"
        awardTitle="RED STAR DESIGN AWARD"
        awardDescription="The Consumer Good Quality Reputation Award is a prestigious award that recognizes the achievements of consumer goods companies. It is a testament to the company’s commitment to excellence in product quality and reputation."
        buttonText="Shop Now"
      />
      <AwardSection
        bgColor="black"
        flexDirection="row"
        awardImage={Image5?.src}
        awardYear="2016"
        awardTitle="HI-TECH ENTERPRISE AWARD"
        awardDescription="The Hi-Tech Enterprise Award is a prestigious award that recognizes the achievements of Chinese high-tech companies. It is a testament to the country’s growing technological capabilities. The award also helps to promote Chinese high-tech to the world."
        buttonText="Shop Now"
      />
      <AwardSection
        bgColor="#f5f5f5"
        flexDirection="row-reverse"
        awardImage={Image6?.src}
        awardYear="2019"
        awardTitle="AIoT SMART TECHNOLOGY OF CHINA REFRIGERATOR INDUSTRY AWARD"
        awardDescription="The AIoT Smart Technology of China Refrigerator Industry Award is a prestigious award that recognizes the achievements of Chinese companies in the development of AIoT smart technology for refrigerators. It is a testament to the country’s growing technological capabilities in this field."
        buttonText="Shop Now"
      />
    </>
  );
};

export default App;
