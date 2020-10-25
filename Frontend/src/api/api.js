import axios from 'axios';

const axiosInstance = axios.create({baseURL: process.env.REACT_APP_LOCALURL,
 headers: {
      'Content-Type': 'application/json',
    },})

    axiosInstance.interceptors.request.use(function (config) {
    const userDetails = localStorage.getItem('userDetails');
    const user = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtby5taWNyb3Bvd2VybWFuYWdlci5jb21cL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MDM0MDA2NDEsImV4cCI6MTYwMzQwNDI0MSwibmJmIjoxNjAzNDAwNjQxLCJqdGkiOiJoa1Y4b29LS2lVYkIwMHpvIiwic3ViIjoyMiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.o_tV0pqHYQv4QhqzFabx6pJoPrbPSlOWXTMi0FBLJL4"
    
    
    // JSON.parse(userDetails)
        
    config.headers.Authorization =  user ? `Bearer ${user}` : null;
    return config;
  });

export default axiosInstance;