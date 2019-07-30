import axios from 'axios'

const baseUrl = 'https://api.magicthegathering.io/v1'

export const getTypes = () => {
	axios.get(`${baseUrl}/types`)
		.then(response => {
			console.log(response.data.types)
			return response.data.types
		})
		.catch(error => {console.log(error)})
}

