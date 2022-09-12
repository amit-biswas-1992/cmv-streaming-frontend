import { BASE_URL, VERSION } from "../utils/constants";

export const callApi = async (endpoint: string, options: any = {} ) => {

    
    const baseUrl = BASE_URL || 'http://localhost:3000';
    const url = `${baseUrl}${VERSION}${endpoint}`;
    const response = await fetch(url, {
        ...options,
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        ...(options.headers || {}),
        },
    });

    return response.json();

    }

export const callApiWithoutToken = async (endpoint: string, options
    :any = {}) => {
    
        const baseUrl = BASE_URL || 'http://localhost:3000';
        const url = `${baseUrl}${VERSION}${endpoint}`;
        const response = await fetch(url, {
            ...options,
            headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
            },
        });
    
        return response.json();
    
        }

        

export const callApiGetWithoutToken = async (endpoint: string, options
    :any = {}) => {
    
        const baseUrl = BASE_URL || 'http://localhost:3000';
        const url = `${baseUrl}${VERSION}${endpoint}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
            },
        });
    
        return response.json();
    
        }

export const callApiPostWithoutToken = async (endpoint: string, options
            :any = {}) => {
            
                const baseUrl = BASE_URL || 'http://localhost:3000';
                const url = `${baseUrl}${VERSION}${endpoint}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {}),
                    },
                });
            
                return response.json();
            
                }

      



export const ApiConstants = {
            // TODO: {
            //   ADD: (userId: number) => {
            //     return "/todo/" + userId;
            //   },
            //   FIND_NOT_COMPLETED: (userId: number) => {
            //     return "/todo/findAllNotCompleted/" + userId;
            //   },
            //   FIND_COMPLETED: (userId: number) => {
            //     return "/todo/findAllCompleted/" + userId;
            //   },
            //   MARK_COMPLETE: (todoId: number) => {
            //     return "/todo/" + todoId;
            //   },
            //   DELETE: (todoId: number) => {
            //     return "/todo/" + todoId;
            //   },
            // },
            // USER: {
            //   SIGN_UP: "/user/signUp",
            //   FIND_ALL: "/user",
            //   DELETE: (userId: number) => {
            //     return "/user/" + userId;
            //   },
            // },
            LOGIN: "/notification/generate-otp",
            VARIFY_OTP: "/notification/verify-otp",
            CREATE_PROFILE: "/core/create-customer-profile",
};