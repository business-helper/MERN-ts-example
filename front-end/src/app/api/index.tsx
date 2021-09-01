import axios from 'axios';

import { ICountry, IMember } from '../interfaces';

export const getCountryList = () => {
  type CountryListResponse = { data: ICountry[], error: string };
  return axios.get<CountryListResponse>(`${process.env.REACT_APP_API_URL}/countries`)
    .then(({ status, data }) => {
      if (status === 200) {
        return data.data;
      } else {
        throw new Error(data.error);
      }
    });
}

export const addMember = (member: IMember) => {
  type MemberResponse = {
    data: IMember,
    error: string
  };
  return axios.post<MemberResponse>(`${process.env.REACT_APP_API_URL}/members`, member)
    .then(({ status, data }) => {
      if (status === 201) {
        return data.data;
      }
      throw new Error(data.error);
    });
}

export const getMembers = () => {
  type MemberListResponse = {
    data: IMember[],
    error: string,
  };
  return axios.get<MemberListResponse>(`${process.env.REACT_APP_API_URL}/members`)
    .then(({ data, status }) => {
      if (status === 200) {
        return data.data;
      }
      throw new Error(data.error);
    });
}

export const deleteMember = (id: string) => {
  type DeleteMemberResponse = {
    error: string,
  };
  return axios.delete<DeleteMemberResponse>(`${process.env.REACT_APP_API_URL}/members/${id}`)
    .then(({ status, data }) => {
      if (status === 204) {
        return true;
      }
      throw new Error(data.error);
    });
}
