const express = require('express')
const axios = require('axios')
const router = express.Router()

const COUNTRIES_URL = 'http://api.airvisual.com/v2/countries?'

router.get('/countries', async(req, res, next) => {
    
    try {
        const params = new URLSearchParams({
            key: process.env.IQAIR_API_KEY,
        })
        const { data } = await axios.get(`${COUNTRIES_URL}${params}`)
        res.json(data)
        
    } catch (error) {
        return next(error)
    }
   
})

const STATES_URL = 'http://api.airvisual.com/v2/states?'

router.get('/states', async(req, res, next) => {
    
    try {
        const countryParam = req.query
        const params = new URLSearchParams({
            country: countryParam.name,
            key: process.env.IQAIR_API_KEY,
        })

        const { data } = await axios.get(`${STATES_URL}${params}`)
        res.json(data)
        
    } catch (error) {
        return next(error)
    }
   
})

const CITIES_URL = 'http://api.airvisual.com/v2/cities?'

router.get('/cities', async(req, res, next) => {
    
    try {
        const queryParams = req.query
        const params = new URLSearchParams({
            state: queryParams.state,
            country: queryParams.country, 
            key: process.env.IQAIR_API_KEY,
        })

        const { data } = await axios.get(`${CITIES_URL}${params}`)
        res.json(data)
        
    } catch (error) {
        return next(error)
    }
   
})

const CITYDATA_URL = 'http://api.airvisual.com/v2/city?'

router.get('/citydata', async(req, res, next) => {
    
    try {
        const queryParams = req.query
        const params = new URLSearchParams({
            city: queryParams.city,
            state: queryParams.state,
            country: queryParams.country, 
            key: process.env.IQAIR_API_KEY,
        })

        const { data } = await axios.get(`${CITYDATA_URL}${params}`)
        res.json(data)
        
    } catch (error) {
        return next(error)
    }
   
})


module.exports = router
