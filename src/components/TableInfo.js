import React, { useContext, useEffect, useState } from "react";
import User from "../context/userContext";

const TableInfo = () => {
  const { user } = useContext(User);
  const userId = user.userId;
  const [data, setData] = useState({ data: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`http://localhost:5000/getPackage/${userId}`)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [data, setData]);
  return (
    <>
      <div className="w-2/3 mx-auto">
        <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Tracking
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Nombre
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Cantidad
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Peso
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Costo
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  ID
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Nombre completo
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Ubicación
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Sexo
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Celular
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((items) => {
                return (
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.id_paquetes}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.nombre}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                    #  {items.cantidad}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.peso} LB
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                   {items.costo || "No definido"}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.usuario_final.id_usuario_final}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.usuario_final.nombres}{" "}
                      {items.usuario_final.apellidos}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.usuario_final.ubicación}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.usuario_final.sexo}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.usuario_final.celular}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableInfo;
