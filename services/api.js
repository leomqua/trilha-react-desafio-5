import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://dgasgdpddyjznrpwuqjw.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYXNnZHBkZHlqem5ycHd1cWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExMDI5NTgsImV4cCI6MjA0NjY3ODk1OH0.jFpPZH3jq6dOQY-B7AS82LJHktd5UBApWWDM7p2WFuI",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYXNnZHBkZHlqem5ycHd1cWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExMDI5NTgsImV4cCI6MjA0NjY3ODk1OH0.jFpPZH3jq6dOQY-B7AS82LJHktd5UBApWWDM7p2WFuI"
    }
})