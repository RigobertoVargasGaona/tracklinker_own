import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { img } from '../assets/img.js';
import { Aside } from '../components/Layout/Aside.jsx';
import { Nav } from '../components/Layout/Nav.jsx';

export const Inventarios = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            subcategories (
              subcategory_name,
              categories (
                category_name
              )
            ),
            product_details(
             product_detail_model,
             product_detail_description,
             product_brands(
              product_brand_name
             ) 
            ),
            product_serials(
              product_serial,
              input_orders(
                input_order_bill
              )

            )
          `);

        if (error) throw error;

        setProducts(data);

      } catch (error) {
        setError('Error al cargar los datos: ' + error.message);
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex w-[100vw] bg-white gap-10 rounded-lg shadow-xl">
      <Aside />
      <div>
        <Nav />
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Inventarios</h2>
        <button className="h-50 p-2 rounded-lg m-4 bg-[#0eb60e] text-[#555855] hover:bg-[#1b801b] hover:text-white hover:shadow-cyan-500/50">Agregar Producto</button>
        <div className="overflow-y-auto h-[70vh] w-[80vw]">
          <table className="min-w-full divide-y divide-rose-100">
            <thead className="sticky top-0 bg-gray-50">
              <tr>
               
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Producto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subcategoría</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de ingreso</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modelo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripcion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marca</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 p-3">
              {console.log(products)}
              {products.map((product) => (
                <tr key={product.product_id} className="text-gray-500 hover:bg-[#FAF2F2] hover:shadow-xl hover:shadow-[#D9D2D2]">
                 
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.product_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.subcategories?.subcategory_name || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.subcategories?.categories?.category_name || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.product_serials?.input_orders?.input_order_bill || 'no hay' }</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.product_serials?.product_serial}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.product_details?.product_detail_model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.product_details?.product_detail_description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.product_details?.product_brands.product_brand_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.product_stock}</td>
                  <td className="px-0 py-0 whitespace-nowrap text-sm font-medium flex gap-3">
                    <a href="#"><img className="pt-2 h-9 hover:h-11" src={img.deleteIcon} alt="Eliminar" /></a>
                    <a href="#"><img className="pt-2 h-9 hover:h-11" src={img.editIcon} alt="Editar" /></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
