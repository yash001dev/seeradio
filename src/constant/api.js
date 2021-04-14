import * as network from './network';

export const getPersonById = (id,token) => network.get(`/api/person/get/${id}?`,{},token) 