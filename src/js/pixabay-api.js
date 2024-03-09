import axios from 'axios';

export async function getData(userInput, page) {
    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: '42630881-770530465aa98d154d18ed059',
                q: userInput,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 15,
                page: page,
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${response.status}`);
        return [];
    }
}