import React,{useState} from "react";
import Swal from "sweetalert2";

const UserFinalForms = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const RegisterUserFinal = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Campo del nombre vacio",
        text: "Por favor un nombre un  válido.",
        showConfirmButton: true,
      });
      return;
    }
    if (lastName.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Campo del nombre vacio",
        text: "Por favor un nombre un  válido.",
        showConfirmButton: true,
      });
      return;
    }
    if (sex.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Campo del nombre vacio",
        text: "Por favor un nombre un  válido.",
        showConfirmButton: true,
      });
      return;
    }
    if (phone.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Campo del teléfono vacio",
        text: "Por favor un <em> Teléfono </em> un  válido.",
        showConfirmButton: true,
      });
      return;
    }
    if (location.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Campo del ubicación vacio",
        text: "Por favor una ubicación válida.",
        showConfirmButton: true,
      });
      return;
    }

    console.log("entro");
  };

  return (
    <form onSubmit={RegisterUserFinal} className="grid gap-6 mb-6 lg:grid-cols-2">
      <div>
        <label
          htmlFor="nombre_u"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Nombre
        </label>
        <input
          type="text"
          id="nombre_u"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ej:John"
          required
        />
      </div>
      <div>
        <label
          htmlFor="apellido"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          value={lastName}
          onChange={(e) => setLastName( e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ej:Smith"
          required
        />
      </div>
      <div>
        <label
          htmlFor="sexo"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Sexo
        </label>
        <select
          id="sexo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(e) => setSex(e.target.value)}
        >
          <option disabled>Selecione</option>
          <option value="m" selected>
            Masculino
          </option>
          <option value="f">Femenino</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="celular"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Celular
        </label>
        <input
          type="text"
          name="celular"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ej: 809-999-1111"
          required
        />
      </div>
      <div>
        <label
          htmlFor="ubicacion"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Ubicación
        </label>
        <input
          type="text"
          name="ubicacion"
          value={location}
          onChange={(e) => setLocation( e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ej:Cutupu, La Vega"
          required
        />
      </div>
      <div>

      <button
            type="submit"
            className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Agregar persona
          </button>
          </div>

    </form>
  );
};

export default UserFinalForms;
