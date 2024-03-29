import React, { useState } from "react";
import { addStaff } from "../../utils/Staff";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("m");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studyLevels, setStudyLevels] = useState("Primario");
  const [getRol, setGetRol] = useState(1);

  const Validate = async (e) => {
    e.preventDefault();
    addStaff(
      name,
      lastName,
      sex,
      phone,
      birthDate,
      email,
      password,
      studyLevels,
      getRol,
      setName,
      setBirthDate,
      setEmail,
      setGetRol,
      setLastName,
      setSex,
      setPassword,
      setStudyLevels,
      setPhone
    );
  };

  return (
    <div className=" mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={Validate}>
              <div className=" overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700">
                        Nombre*
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700">
                        Apellido*
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700">
                        Celular
                      </label>
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="sex"
                        className="block text-sm font-medium text-gray-700">
                        Sexo*
                      </label>
                      <select
                        name="sex"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        required>
                        <option value="m">Masculino</option>
                        <option value="f">Femenino</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="studyLevels"
                        className="block text-sm font-medium text-gray-700">
                        Niveles de estudio*
                      </label>
                      <select
                        name="studyLevels"
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        value={studyLevels}
                        onChange={(e) => setStudyLevels(e.target.value)}
                        required>
                        <option value="Primario">Primario</option>
                        <option value="Secundarios">Secundarios</option>
                        <option value="Universitarios">Universitarios</option>
                        <option value="Tecnicos">Tecnicos</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="birthDate"
                        className="block text-sm font-medium text-gray-700">
                        Fecha de nacimiento*
                      </label>
                      <input
                        id="birthDate"
                        type="date"
                        name="birthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700">
                        Correo Electrónico*
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700">
                        Contraseña*
                      </label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="rol"
                        className="block text-sm font-medium text-gray-700">
                        Rol*
                      </label>
                      <select
                        name="rol"
                        value={getRol}
                        onChange={(e) => setGetRol(e.target.value)}
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        required>
                        <option value="3">Trabajador</option>
                        <option value="2">Repartidor</option>
                        <option value="1">Admin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
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

export default Register;
