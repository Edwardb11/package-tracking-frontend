import React, { useState, useContext } from "react";
import AddPackage from "../utils/AddPackage";
import User from "../context/userContext";

const PackageForms = () => {
  const Quantitys = [];
  const Quantity = () => {
    for (let i = 1; i < 100; i++) {
      Quantitys.push(i);
    }
    return Quantitys;
  };

  Quantity();

  const { user } = useContext(User);

  const [namePackage, setNamePackage] = useState("");
  const [weightPackage, setWeightPackage] = useState("");
  const [quantityPackage, setQuantityPackage] = useState(1);
  const [provinceLocated, setProvinceLocated] = useState("");
  const [houseNumberLocated, setHouseNumberLocated] = useState(1);
  const [municipalityLocated, setMunicipalityLocated] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [lastNameUser, setLastNameUser] = useState("");
  const [sexUser, setSexUser] = useState("m");
  const [phoneUser, setPhoneUser] = useState("");
  const [houseDestination, setHouseDestination] = useState(1);
  const [destinationMunicipality, setDestinationMunicipality] = useState("");
  const [destinationProvince, setDestinationProvince] = useState("");

  const Validate = async (e) => {
    e.preventDefault();
    console.log("klk");
    const clientId = user.userId;
    AddPackage(
      clientId,
      namePackage,
      weightPackage,
      quantityPackage,
      provinceLocated,
      houseNumberLocated,
      municipalityLocated,
      nameUser,
      lastNameUser,
      sexUser,
      phoneUser,
      houseDestination,
      destinationMunicipality,
      destinationProvince
    );
    console.log("aaaa");
  };

  return (
    <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={Validate}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <h1 className="text-center font-medium text-xl">
                  Complete el siguiente formulario para agregar un paquete
                </h1>
                <div className="w-full h-0.5 bg-indigo-500" />

                <div className="px-2 py-2 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="namePackage"
                        className="block text-sm font-medium ">
                        Información del paquete{" "}
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="namePackage"
                        className="block text-sm font-medium text-gray-700">
                        Nombre*
                      </label>
                      <input
                        type="text"
                        id="namePackage"
                        value={namePackage}
                        onChange={(e) => setNamePackage(e.target.value)}
                        placeholder="Ej: Mesa Gaming"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="weight"
                        className="block text-sm font-medium text-gray-700">
                        Peso (LB)*
                      </label>
                      <input
                        type="number"
                        id="weight"
                        value={weightPackage}
                        min={0}
                        onChange={(e) => setWeightPackage(e.target.value)}
                        placeholder="Ej: 10 LB"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium ">
                        Cantidad (Unidad) *{" "}
                      </label>
                      <select
                        type="number"
                        id="quantity"
                        placeholder="Ej: 10"
                        value={quantityPackage}
                        onChange={(e) => setQuantityPackage(e.target.value)}
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                        {Quantitys.map((item) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </select>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="province"
                        className="block text-sm font-medium ">
                        Ubicación del paquete{" "}
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="province"
                        className="block text-sm font-medium text-gray-700">
                        Provincia*
                      </label>
                      <input
                        type="text"
                        id="province"
                        value={provinceLocated}
                        onChange={(e) => setProvinceLocated(e.target.value)}
                        placeholder="Ej: La Vega"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="Municipality"
                        className="block text-sm font-medium text-gray-700">
                        Municipio*
                      </label>
                      <input
                        id="Municipality"
                        type="text"
                        value={municipalityLocated}
                        onChange={(e) => setMunicipalityLocated(e.target.value)}
                        placeholder="Ej: Rio verde arriba"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="houseNumberLocated"
                        className="block text-sm font-medium text-gray-700">
                        Numero casa*{" "}
                      </label>
                      <input
                        type="number"
                        id="houseNumberLocated"
                        value={houseNumberLocated}
                        min={0}
                        onChange={(e) => setHouseNumberLocated(e.target.value)}
                        placeholder="Ej: 50"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="endUser"
                        className="block text-sm font-medium ">
                        Información del usuario final{" "}
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="nameUser"
                        className="block text-sm font-medium text-gray-700">
                        Nombre*
                      </label>
                      <input
                        type="text"
                        id="nameUser"
                        value={nameUser}
                        onChange={(e) => setNameUser(e.target.value)}
                        placeholder="Ej: Juan"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="lastNameUser"
                        className="block text-sm font-medium text-gray-700">
                        Apellido*
                      </label>
                      <input
                        type="text"
                        id="lastNameUser"
                        value={lastNameUser}
                        onChange={(e) => setLastNameUser(e.target.value)}
                        placeholder="Ej: Perez Diaz"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="sex"
                        className="block text-sm font-medium text-gray-700">
                        Sexo*{" "}
                      </label>
                      <select
                        id="sex"
                        value={sexUser}
                        onChange={(e) => setSexUser(e.target.value)}
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                        <option value="m">Masculino</option>
                        <option value="f">Femenino</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="phoneUser"
                        className="block text-sm font-medium text-gray-700">
                        Celular*{" "}
                      </label>
                      <input
                        type="text"
                        id="phoneUser"
                        value={phoneUser}
                        onChange={(e) => setPhoneUser(e.target.value)}
                        placeholder="Ej: 809-293-9028"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="destinationLocationProvince"
                        className="block text-sm font-medium ">
                        Ubicación de destino{" "}
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="destinationLocationProvince"
                        className="block text-sm font-medium text-gray-700">
                        Provincia*
                      </label>
                      <input
                        type="text"
                        id="destinationLocationProvince"
                        value={destinationProvince}
                        onChange={(e) => setDestinationProvince(e.target.value)}
                        placeholder="Ej: Azua"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="destinationLocationMunicipality"
                        className="block text-sm font-medium text-gray-700">
                        Municipio*
                      </label>
                      <input
                        type="text"
                        id="destinationLocationMunicipality"
                        placeholder="Ej: Guayabal"
                        value={destinationMunicipality}
                        onChange={(e) =>
                          setDestinationMunicipality(e.target.value)
                        }
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="houseNumberDestination"
                        className="block text-sm font-medium text-gray-700">
                        Numero casa*{" "}
                      </label>
                      <input
                        type="number"
                        id="houseNumberDestination"
                        value={houseDestination}
                        min={0}
                        onChange={(e) => setHouseDestination(e.target.value)}
                        placeholder="Ej: 10"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageForms;
