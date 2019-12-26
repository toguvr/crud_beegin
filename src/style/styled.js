import styled from 'styled-components'

export const CampaignMainContainer = styled.div`
  background: #2e3154;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CampaignBodyContainer = styled.div`
  background: #2e3154;
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    display: none;
  }
`

export const BodyContainer = styled.div`
  min-height: 60vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
`

export const CampaignTitle = styled.h2`
  color: white;
  width: 100%;
  text-align: left;
`

export const DeatailsTitle = styled.span`
  color: #979ea8;
  font-size: 14px;
  width: 18%;
`

export const ButtonDefault = styled.button`
  background: ${props => props.colorBtn};
  color: white;
  padding: 7px 15px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  
  :active{
    position: relative;
    top:2px;
  }

  :focus{
    outline:none;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`

