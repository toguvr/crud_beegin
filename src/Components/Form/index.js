import React, { useState } from "react";
import { connect } from "react-redux";
import { FormContainer, ArrowBackIconStyled, TitleForm, AreaFormRecipients, AreaForm, InputForm } from "./styled";
import { createCampaign } from "../../actions";
import { ButtonDefault } from "../../style/styled";

const Form = ({ backPage, createCampaign }) => {

  const [formData, setFormData] = useState({})

  const handleForm = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const createCurrentCampaign = () => {
    createCampaign(formData)
    backPage(false)
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
        min={0}
        type="number"
      />
      <ButtonDefault onClick={createCurrentCampaign} colorBtn="#28a745">Adicionar</ButtonDefault>
    </FormContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  createCampaign: (campaignInfo) => dispatch(createCampaign(campaignInfo)),
})

export default connect(null, mapDispatchToProps)(Form)
