export const setArbConfig = (state, configData) => {
  console.log('setArbConfig, configData: ', configData)
  state.config = configData
}

export const setArbitrators = (state, arbitrators) => {
  state.arbitrators = arbitrators
}

export const setElections = (state, elections) => {
  state.elections = elections
}

export const setNominees = (state, nominees) => {
  state.nominees = nominees
}

export const setCaseFiles = (state, case_files) => {
  console.log('setCaseFiles: ', case_files)
  state.case_files = case_files
}

export default {
  setArbConfig,
  setArbitrators,
  setElections,
  setNominees,
  setCaseFiles
}