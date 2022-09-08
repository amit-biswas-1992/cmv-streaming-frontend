import { BASE_URL } from "../utils/constants";
import { VERSION } from "../utils/constants";


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
   