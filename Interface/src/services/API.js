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

    async changeProduct(values, id) {

      if (values.name === "") delete values.name;
      if (values.description === "") delete values.description;
      if (values.amount === "") delete values.amount;
      if (values.price === "") delete values.price;
      if (values.category_id === "") delete values.category_id;

      console.log(values);
      
      try {
          const response = await api.patch(
            `/product/${parseInt(id)}`, values
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

    /*async getAllProducts() {
      const response = await api.get(
        "/products",
    );

    return response.data
    }*/

    async getAllProducts(filter, value) {
      const response = await api.get(
        `/products?${filter}=${value}`,
    );

    return response.data
    }

    async getAllCategories() {
        const response = await api.get(
            "/categories",
        );

        return response.data
    }

    async deleteProduct(id) {
      const response = await api.delete(
        `/product/${id}`
      );

      setInterval(location.reload(), 2000);

      return response.data
    }
}

export default MetodsApi