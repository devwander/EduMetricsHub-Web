import { api } from "@/lib";
import { Paginate, Student, StudentHistoric, StudentProgress } from "@/models";
import { QueryStudent } from "@/models/params.model";

export default class StudentService {
  public async paginate(
    params: Partial<QueryStudent>
  ): Promise<Paginate<Student>> {
    const { page, perPage, search } = params;

    const { data: pagination } = await api.get<Paginate<Student>>(
      `university/students`,
      {
        params: {
          page,
          perPage,
          search,
        },
      }
    );
    return pagination;
  }

  public async show(id: string | number): Promise<Student> {
    const { data } = await api.get<Student>(`university/student/${id}`);
    return data;
  }

  public async progress(id: string | number): Promise<StudentProgress> {
    const { data } = await api.get<StudentProgress>(
      `university/student/data/progress/${id}`
    );
    return data;
  }

  public async historic(id: string | number): Promise<StudentHistoric> {
    const { data } = await api.get<StudentHistoric>(
      `university/student/data/historic/${id}`
    );
    return data;
  }
}
