import axios from 'axios';
const API = 'http://localhost:5000/api/projects';

const getProjects = async () => {
    try {
        const response = await axios.get(API);
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
}

export default getProjects;