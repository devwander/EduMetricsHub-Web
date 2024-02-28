import AuthService from "./auth";
import StudentService from "./student";

export const Service = {
  auth: new AuthService(),
  student: new StudentService(),
};
