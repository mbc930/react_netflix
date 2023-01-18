import React from 'react'
import styled from 'styled-components';

export default function Footer() {

  const FooterContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center
    padding:40px 0px;
    border-top: 1px solid rgb(25, 25, 25);
    width: 100%;
    position: relative;
    z-index: 100;

    @media (max-width: 768px){
      padding : 20px 20px;
      padding-bottom: 30px;
    }
  `;

  const FooterContent =   styled.div``;
  
  const FooterLinkContainer = styled.div`
    width: 500px;

    @media (max-width: 768px){
      width : 100%
    }
  `;

  const FooterLinkTitle = styled.h1`
    color:gray;
    font-size : 17px;
  `;

  const FooterLinkContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    margin-top:35px;

    @media (max-width: 768px){
      margin-top:26px;
    }
  `;

  const FooterLink = styled.a`
    color: gray;
    font-size:14px;
    width: 110px;
    margin-bottom: 21px;
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }

    @media (max-width:768px){
      font-size:14px;
      margin-bottom:16px;
    }
  `;

  const FooterDesContainer=styled.div`
    margin-top:30px;

    @media(max-width:768px){
      margin-top:20px;
    }
  `;

  const FooterDescRights = styled.h2`
    color: white;
    font-size: 14px;
    text-align: center;
  `;






  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 리액트 만들기</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href='https://www.netflix.com/browse/audio-description'>화면 해설</FooterLink>
            <FooterLink href='https://help.netflix.com/ko/node/412'>넷플릭스 소개</FooterLink>
            <FooterLink href='https://help.netflix.com/ko/'>고객 센터</FooterLink>
            <FooterLink href='https://media.netflix.com/ko/'>미디어 센터</FooterLink>
            <FooterLink href='https://help.netflix.com/legal/termsofuse'>이용 약관</FooterLink>
            <FooterLink href='https://www.netflix.com/jp-ko/redeem'>기프트 카드</FooterLink>
            <FooterLink href='https://help.netflix.com/legal/privacy'>개인 정보</FooterLink>
            <FooterLink href='https://help.netflix.com/legal/corpinfo'>회사 정보</FooterLink>
            <FooterLink href='https://help.netflix.com/legal/notices'>법적 고지</FooterLink>
            <FooterLink href='https://jobs.netflix.com/'>입사 정보</FooterLink>
            <FooterLink href='https://help.netflix.com/ko/contactus'>문의 하기</FooterLink>
            <FooterLink href='https://help.netflix.com/legal/jacommercialtransaction'>특정 상거래법에 근거한 표시</FooterLink>
          </FooterLinkContent>
        </FooterLinkContainer>
        <FooterDesContainer>
          <FooterDescRights>©Netflix Rights Reserved.(This is React practice)</FooterDescRights>
        </FooterDesContainer>
      </FooterContent>
    </FooterContainer>  
  )
}
