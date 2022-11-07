import React, { useContext, useState } from "react";
import User from "../../context/userContext";
import useGetStaff from "../../hooks/useGetStaff";
import Alerts from "../../utils/Alerts";
import EditRol from "./EditRol";
import TableStaffBody from "./TableStaffBody";
import TableStaffHead from "./TableStaffHead";

const TableStaffNoActive = () => {
  const { data, setData } = useGetStaff();
  const [getStaff, setGetStaff] = useState({
    view: false,
    staffId: "",
  });
  const { user } = useContext(User);
  return (
    <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <TableStaffHead />
            <tbody>
              {data.data.map((items) => {
                if (!items.personal.activo) {
                  return (
                    <TableStaffBody
                      key={items.personal?.id_personal}
                      name={items.personal?.nombres}
                      lastName={items.personal?.apellidos}
                      email={items.personal?.correo_electronico}
                      phone={items.personal?.celular}
                      rol1={items.personal?.roles[0]?.nombre}
                      rol2={items.personal?.roles[1]?.nombre}
                      rol3={items.personal?.roles[2]?.nombre}
                      setGetStaff={setGetStaff}
                      getStaff={getStaff}
                      setData={setData}
                      staffId={items.personal?.id_personal}
                      comparId={items.personal?.id_personal === user.staffId}
                      isOld={!items.personal.activo}
                    />
                  );
                } else {
                  return <></>;
                }
              })}
              <tr className="bg-gray-100 text-center border-b text-sm text-gray-600"></tr>
            </tbody>
          </table>
        </div>
        <Alerts state={data?.data} alert={"No hay personal inactivo."} />

        {getStaff.view && (
          <EditRol
            id={getStaff.staffId}
            setShowModals={setGetStaff}
            showModal={getStaff.view}
            setData={setData}
          />
        )}
      </div>
    </div>
  );
};

export default TableStaffNoActive;
