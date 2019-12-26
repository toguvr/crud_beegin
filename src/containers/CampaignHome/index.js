import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { CampaignMainContainer, CampaignTitle, TitleContainer, BodyContainer, DeatailsTitle, ButtonDefault, CampaignBodyContainer, DivFlex } from "../../style/styled";
import { createCampaign, getCampaign } from "../../actions";
import CampaignBar from '../../Components/CampaignBar'
import Form from "../../Components/Form";
import FormEdit from "../../Components/FormEdit";

const CampaignHome = ({ getCampaign, currentCampaigns }) => {

  const [openCreate, setOpenCreate] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  useEffect(() => {
    getCampaign()
  }, [])

  return (
    <CampaignMainContainer>
      {openCreate && <Form backPage={setOpenCreate} />}
      {openEdit && <FormEdit backPage={setOpenEdit} />}
      <BodyContainer>
        <CampaignTitle>Gestão de Campanhas</CampaignTitle>
        <TitleContainer>
          <DeatailsTitle>Alerta</DeatailsTitle>
          <DeatailsTitle>Data</DeatailsTitle>
          <DeatailsTitle>Destinátarios</DeatailsTitle>
          <DeatailsTitle>Status</DeatailsTitle>
          <DivFlex>
            <DeatailsTitle>Ações</DeatailsTitle>
            <ButtonDefault onClick={() => setOpenCreate(true)} colorBtn='#28a745'>Adicionar</ButtonDefault>
          </DivFlex>
        </TitleContainer>
        <CampaignBodyContainer>
          {currentCampaigns ? currentCampaigns.map((campaign, index) => {
            return <CampaignBar
              key={index}
              alert={campaign.alerta}
              date={campaign.data}
              recipients={campaign.destinatarios}
              status={campaign.status}
              id={campaign.id}
              openEditForm={setOpenEdit}
            />
          }) : <CircularProgress />}
        </CampaignBodyContainer>
      </BodyContainer>
    </CampaignMainContainer>
  );
}

const mapStateToProps = state => ({
  currentCampaigns: state.campaign.currentCampaigns,
})

const mapDispatchToProps = dispatch => ({
  createCampaign: (campaignInfo) => dispatch(createCampaign(campaignInfo)),
  getCampaign: () => dispatch(getCampaign()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignHome)
