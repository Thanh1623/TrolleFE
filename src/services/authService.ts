import { axiosService } from "./axios";
// CREATE user
const authService = {
  register: async (email: string, password: string) => {
    const response = await axiosService.post("/auth/register", {
      email,
      password,
    });
    return response;
  },
  login: async (email: string, password: string) => {
    const response = await axiosService.post("/auth/login", {
      email,
      password,
    });
    return response;
  },
};

export default authService;
