export async function ProductService() {
  return await fetch(
    'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
  ).then((response) => response.json());
}
