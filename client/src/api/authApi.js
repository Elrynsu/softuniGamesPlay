import { useEffect } from "react";
import request from "../utils/request"

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortController = new AbortController();

    const login = async (email, password) => {
       const result = await request.post(`${baseUrl}/login`, {email, password}, {signal: abortController.signal});

       return result;
    }

    useEffect(() => {
        return () => abortController.abort();
    }, [])

    return {
        login,
    }
}