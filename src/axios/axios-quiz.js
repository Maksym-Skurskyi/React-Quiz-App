import axios from "axios"



export default axios.create({
	baseURL: "https://quizonreact-default-rtdb.europe-west1.firebasedatabase.app/",
})