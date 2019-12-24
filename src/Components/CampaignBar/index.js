import React from "react";
import { connect } from "react-redux";
import { BarMainContainer, DeatailsTitle, ButtonsDiv } from "./styled";
import { deleteCampaign, currentCampaign } from "../../actions";
import { ButtonDefault } from "../../style/styled";


const CampaignBar = ({ alert, date, recipients, status, id, deleteCampaign, openEditForm, currentCampaign }) => {

  const editCampaign = () => {
    currentCampaign({ alert, date, recipients, status, id })
    openEditForm(true)
  }

  return (
    <BarMainContainer>
      <DeatailsTitle>{alert}</DeatailsTitle>
      <DeatailsTitle>{new Date(date).toLocaleDateString()}</DeatailsTitle>
      <DeatailsTitle>{recipients}</DeatailsTitle>
      <DeatailsTitle>{status}</DeatailsTitle>
      <ButtonsDiv>
        <ButtonDefault onClick={editCampaign} colorBtn="#6c757d">Editar</ButtonDefault>
        <ButtonDefault onClick={() => deleteCampaign(id)} colorBtn="#dc3545">Deletar</ButtonDefault>
      </ButtonsDiv>
    </BarMainContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteCampaign: (id) => dispatch(deleteCampaign(id)),
  currentCampaign: (info) => dispatch(currentCampaign(info)),
})

export default connect(null, mapDispatchToProps)(CampaignBar)
