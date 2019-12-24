import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FormContainer, ArrowBackIconStyled, TitleForm, AreaFormRecipients, AreaForm, InputForm } from "./styled";
import { editCampaign } from "../../actions";
import { ButtonDefault } from "../../style/styled";

const FormEdit = ({ backPage, editCampaign, currentCampaign }) => {

  const [formData, setFormData] = useState({})

  useEffect(() => {
    setFormData({ ...formData, name: currentCampaign.alert, status: currentCampaign.status, date: currentCampaign.date, recipients: currentCampaign.recipients })
  }, [])

  const handleForm = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const editCurrentCampaign = () => {
    editCampaign(formData, currentCampaign.id)
  }

  return (
    <FormContainer>
      <ArrowBackIconStyled onClick={() => backPage(false)} />
      <TitleForm>Empresa</TitleForm>
      <AreaForm
        value={formData.name}
        onChange={handleForm}
        name="name"
      />
      <TitleForm>Data</TitleForm>
      <InputForm
        value={formData.date}
        onChange={handleForm}
        name="date"
        type="date"
      />
      <TitleForm>Destinatários</TitleForm>
      <AreaFormRecipients
        value={formData.recipients}
        onChange={handleForm}
        name="recipients"
      />
      <TitleForm>Status</TitleForm>
      <AreaForm
        value={formData.status}
        onChange={handleForm}
        name="status"
      />
      <ButtonDefault onClick={editCurrentCampaign} colorBtn="#28a745">Atualizar</ButtonDefault>
    </FormContainer>
  );
}

const mapStateToProps = state => ({
  currentCampaign: state.campaign.currentCampaign,
})

const mapDispatchToProps = dispatch => ({
  editCampaign: (campaignInfo, id) => dispatch(editCampaign(campaignInfo, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit)
