
import React, {useEffect, useState  } from 'react';
import { supabase } from '../supabaseClient'; // Importa el cliente configurado
import {img} from '../assets/img.js';
import { Aside } from '../components/Layout/Aside.jsx';
import { Nav } from '../components/Layout/Nav.jsx';
import  Modal  from '../components/Modals/Modal';
import { Input } from '../components/Modals/Input.jsx'; 

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. EL ESTADO DEL MODAL AHORA VIVE AQUÍ
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Consulta la tabla 'users' y trae todos los registros
        const { data, error } = await supabase
          .from('users') 
          .select('*');

        if (error) {
          throw error;
        }

        setUsers(data);
      } catch (error) {
        setError('Error al cargar los datos: ' + error.message);
        console.error("Error al obtener usuarios:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
      }, []); // El array vacío de dependencias asegura que el efecto se ejecute solo una vez al montar
    /*
      if (loading) {
        return <div>Cargando usuarios...</div>;
      }
    */
    if (error) {
      return <div>Error: {error}</div>;
    }


  // Función para alternar el estado (abrir/cerrar)
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
  <div className="flex w-[100vw] bg-white gap-10  rounded-lg shadow-xl">
    
   <Aside/> 
    <div>
      <Nav/>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Registros de Usuarios</h2>
      
      <button className="h-50 p-2 rounded-lg m-4 bg-[#0eb60e] text-[#555855] hover:bg-[#1b801b] hover:text-white hover:shadow-cyan-500/50"
        onClick={toggleModal}
         
      >
        {isModalOpen ? 'Agregando Usuario' : 'Agregar Usuario'}
      </button>

      {/* 3. PASAR EL ESTADO Y LA FUNCIÓN COMO PROPS AL MODAL */}
      <Modal
        isOpen={isModalOpen} 
        onClose={toggleModal} // Opcional, pero útil para que el modal se cierre a sí mismo
      >
        <div className=' flex flex-col gap-7'>

          <select className='h-12 outline-none p-2 border rounded-md' name="" id="" >
            <option value="Administrador">Administrador</option>
            <option value="Tecnico">Técnico</option>
            <option value="Almacen">Almacén</option>
            <option value="Cliente">Administrador</option>
          </select>
          <div className="relative w-full mb-6">
          <Input
          name={"nombre"}
          placeholder={"Nombre"}
          labelText={"Nombre"}
          id={""}
          
          />
          <Input
          name={"apellido1"}
          placeholder={"apellido1"}
          labelText={"Primer Apellido"}
          id={""}

          />
          <Input
          name={"apellido2"}
          placeholder={"apellido2"}
          labelText={"Segundo Apellido"}
          id={""}

          />
          <Input
          name={"telefono"}
          placeholder={"telefono"}
          labelText={"Teléfono"}
          id={""}

          />
          <Input
          type={'email'}
          name={"email"}
          placeholder={"email"}
          labelText={"Email"}
          id={""}

          />
          <Input
          name={"address"}
          placeholder={"Dirección"}
          labelText={"Dirección"}
          id={""}

          />
          <Input
          type={'password'}
          name={"password"}
          placeholder={"Contraseña"}
          labelText={"Contraseña"}
          id={""}

          />



          
        </div>
      </div> 
      </Modal>

        <div className="overflow-y-auto h-[70vh] w-[80vw]">
        <table className="min-w-full divide-y divide-rose-100">
          <thead className=" top-0 bg-gray-50"> {/*  'sticky top-0' to keep the header visible */}
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Activo
              </th>
              
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Primer Apellido 
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SegundoApellido 
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teléfono
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 p-3 ">
            {users.map((user) => (
              <tr key={user.user_id } className='  text-gray-500  hover:bg-[#FAF2F2] hover:shadow-xl
              hover:shadow-[#D9D2D2]' >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'><input type="checkbox" name="" id="" /></td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{user.rol_id}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{user.user_name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{user.user_first_surname}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{user.user_second_surname}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{user.user_phone}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{user.user_email}</td>
                <td className='px-0 py-0 whitespace-nowrap text-sm font-medium flex gap-3'><a href="#"><img className='pt-2  h-9 hover:h-11 ' src={img.deleteIcon} alt=''></img></a><a href="#"><img className='pt-2  h-9 hover:h-11' src={img.editIcon} alt=''></img></a></td>

              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>  
  );
};