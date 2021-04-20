import * as network from './network';

export const getPersonById = (id,token) => network.get(`/api/person/get/${id}?`,{},token);

export const getCampaignByID = (id,token) => network.get(`/api/campaign/${id}`,{},token);