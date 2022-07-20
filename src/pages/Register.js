import React from "react";
import Imagen from "../components/Imagen";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { url } from "../api/api";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const history = useHistory()
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
console.log(sex)
  const Register = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Correo electrónico inválido',
        text: 'Por favor introduzca un correo válido.',
        showConfirmButton: true,
      })
      return;
    }

    if (password.trim().length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña débil',
        text: 'La contraseña debe ser mayor de 6 caracteres.',
        showConfirmButton: true,
      })
      return;
    }
    console.log("entro")
    Auth({name,email,password})
  };

  const Auth = async()=>{
    try {
      await axios.post(`${url}/register`, {
        nombres: name,
        apellidos: lastName,
        correo_electronico:email,
        contrasena: password,
        sexo:sex,
        celular:phone,
        fecha_nacimiento:date
      });
      let timerInterval;
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Por favor inicie sesión.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })
      history.push("/auth/login")
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: '¡Ups! Ha ocurrido un error',
          text: 'Ha ocurrido un error al registrar a un nuevo usuario, intente más tarde.',
          showConfirmButton: true,
        })
        console.log(error);
      }
    }
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
        }}
      />
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <Imagen />
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 ">
                  Registrarse
                </h1>
                <p>Ingresa tus datos para registrarte</p>
              </div>
              <form className="text-gray-700" onSubmit={Register}>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                      Nombre
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                      Apellido
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                      Sexo
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-fingerprint text-gray-400 text-lg" />
                      </div>
                      <select onChange={(e)=>setSex (e.target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" required>
                        <option disabled>Selecione</option>
                        <option value="m" selected  >Masculino</option>
                        <option value="f" >Femenino</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                      Celular
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-phone-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="849-826-4011"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                      Fecha de nacimiento
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-calendar-range-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="849-856-4014"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                      Correo Electrónico
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                      Contraseña
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button className="block uppercase w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      Registrate
                    </button>
                  </div>
                </div>
                <div className="w-full px-3 mb-5 text-center text-sm">
                  ¿Ya eres usuario?
                  <Link to="/auth/login" className="text-indigo-600">
                    {" "}
                    Inicia sesión
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
