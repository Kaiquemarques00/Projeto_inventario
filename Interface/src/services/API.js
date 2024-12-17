import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

class MetodsApi {

    messageAPI = "";
    errorAPI = "";

    async createProduct(values) {
        const name = values[0];
        const description = values[1];
        const amount = parseInt(values[2]);
        const price = parseFloat(values[3]);
        const category_id = parseInt(values[4]);

        try {
            const response = await api.post(
              "/product",
              {
                name,
                description,
                amount,
                price,
                category_id
              }
            );
      
            this.messageAPI = response.data;
            alert(this.messageAPI);
            setInterval(location.reload(), 2000);
          } catch (error) {
            // Lidar com erros de envio de dados
            this.errorAPI = error.response.data;
            alert(this.errorAPI);
            console.log(error);
          }
    }

    async getAllCategories() {
        const response = await api.get(
            "/categories",
        );

        return response.data
    }
}

export default MetodsApi