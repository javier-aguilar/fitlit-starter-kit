const getData = async (type) => {
    try {
        const response = await fetch(`http://localhost:3001/api/v1/${type}`).then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText} `);
            }
            return response.json();
            
        });
        return response;       
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getData
} 
