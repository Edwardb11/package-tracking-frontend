import axios from "axios";
import { url } from "../api/api";

export const ChangeLastState = async (lastState, tracking) => {
  await axios.put(`${url}/changeLastState`, {
    id_estado: lastState,
    id_paquetes: tracking,
  });
};
