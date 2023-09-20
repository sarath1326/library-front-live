
import axios from "axios"

const basisUrl="https://library-backend-sdi1.onrender.com"



// "http://localhost:3001"

// "https://library-backend-sdi1.onrender.com"







const instance=axios.create({
    baseURL:basisUrl
})

export default instance


