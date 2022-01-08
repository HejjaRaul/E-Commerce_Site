import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDVkYzY1YWRkNGJhYTE5ZGRjZTVjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTY1ODM5MSwiZXhwIjoxNjQxOTE3NTkxfQ.pNgz6J-nzhZCod8SWl05qvwEprzJbLNHJX3qsDg0QWo";

export const publicRequest = axios.create({
    data: {
        baseUrl: BASE_URL,
    },
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});