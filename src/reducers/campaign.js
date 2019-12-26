const initialState = {
  currentCampaigns: [],
  currentCampaign: {}
}

const campaign = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CAMPAIGN":
      return { ...state, currentCampaigns: action.payload.campaign }
    case "CAMPAIGN_INFO":
      return { ...state, currentCampaign: action.payload.info }
    default:
      return state
  }
}

export default campaign