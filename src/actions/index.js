import axios from 'axios'

const baseUrl = 'https://beeginbackofficeapi.azurewebsites.net'

export const setCampaign = (campaign) => ({
  type: 'SET_CAMPAIGN',
  payload: {
    campaign
  }
})

export const currentCampaign = (info) => ({
  type: 'CAMPAIGN_INFO',
  payload: {
    info
  }
})

export const createCampaign = (campaignInfo) => async (dispatch) => {
  const body = {
    alerta: campaignInfo.name,
    data: campaignInfo.date,
    destinatarios: campaignInfo.recipients,
    status: 'Pendente',
  }

  const response = await axios.post(`${baseUrl}/api/lead/campanha`, body)
  if (response.status === 200) {
    dispatch(getCampaign())
  }
}

export const editCampaign = (campaignInfo, id) => async (dispatch) => {
  const body = {
    alerta: campaignInfo.name,
    data: campaignInfo.date,
    destinatarios: campaignInfo.recipients,
    status: campaignInfo.status,
  }

  const response = await axios.put(`${baseUrl}/api/lead/campanha/${id}`, body)
  if (response.status === 200) {
    dispatch(getCampaign())
  }
}

export const deleteCampaign = (id) => async (dispatch) => {

  const response = await axios.delete(`${baseUrl}/api/lead/campanha/${id}`)
  if (response.status === 200) {
    dispatch(getCampaign())
  }
}


export const getCampaign = () => async (dispatch) => {

  const response = await axios.get(`${baseUrl}/api/lead/campanha`)

  if (response.status === 200) {
    dispatch(setCampaign(response.data))
  }
}