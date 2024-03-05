import { api } from "@/lib";
import { Paginate, Student } from "@/models";
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
}
