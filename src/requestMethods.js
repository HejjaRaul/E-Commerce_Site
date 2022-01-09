import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDVkYzY1YWRkNGJhYTE5ZGRjZTVjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTczMzUzNSwiZXhwIjoxNjQxOTkyNzM1fQ.HdA67N5z4QQMus_Qa34M9DFXLTBRi8XLDPCfWOQDF9Q";

export const publicRequest = axios.create({
    data: {
        baseUrl: BASE_URL,
    },
});

export const userRequest = axios.create({
    //baseUrl: "http://localhost:3000/api/",
    headers: {token: `Bearer ${TOKEN}`},
});