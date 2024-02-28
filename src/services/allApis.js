import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

export const registerApi=async (data)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,data,'')
}
export const loginApi= async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,data,'')

}
export const addDetailsApi=async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/user/adddetails`,data,headers)
}

export  const userDetails=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/user/viewDetails`,"",headers)
}

export const addReviewApi=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/review`,data)
}

export  const userReview=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/user/viewReviews`,"",headers)
}

export const viewUser = async (headers) => {
    return await commonApi("GET", `${BASE_URL}/user/userDetail`, "",  headers)

}
export const addFavouriteApi=async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/user/addFavourite`,data,headers)
}

export  const viewFvourite=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/user/viewFavourite`,"",headers)
}

export const deleteFav = async (headers, id) => {
    return await commonApi("DELETE", `${BASE_URL}/user/deleteFvourite/${id}`,{}, headers)

}

export const adminDel = async (headers, id) => {
    return await commonApi("DELETE", `${BASE_URL}/user/deleteAdmin/${id}`,{}, headers)

}

