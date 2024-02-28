import { api } from "@/lib";
import { QueryDiscipline } from "@/models/params.model";

export default class DisciplineService {
  public async paginate(params: Partial<QueryDiscipline>): Promise<any> {
    const { take = 10 } = params;

    const { data } = await api.get<any>(`university/disciplines`, {
      params: {
        take,
      },
    });
    return data;
  }
}
