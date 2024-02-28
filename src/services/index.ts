import AuthService from "./auth";
import DisciplineService from "./discipline";
import StudentService from "./student";

export const Service = {
  auth: new AuthService(),
  student: new StudentService(),
  discipline: new DisciplineService(),
};
