import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetchProducts = async (): AxiosPromise => {
  const response = axios.get("http://localhost:8080/products", {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
    }
  })
  return response;
}

export function useProductsData() {
  const query = useQuery({
    queryFn: fetchProducts,
    queryKey: ['products-data'],
    retry: 1,     
  })

  return {
    ...query,
    data: query.data?.data,
  }
}