
import axios from "axios"

const basisUrl="http://localhost:3001"


// "http://localhost:3001"

// "https://library-backend-91wt.onrender.com"







const instance=axios.create({
    baseURL:basisUrl
})

export default instance

