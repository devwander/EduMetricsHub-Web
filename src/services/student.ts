import { api } from "@/lib";
import { QueryStudent } from "@/models/params.model";

export default class StudentService {
  public async paginate(params: Partial<QueryStudent>): Promise<any> {
    const { take = 10 } = params;

    const { data } = await api.get<any>(`university/students`, {
      params: {
        take,
      },
    });
    return data;
  }
}
