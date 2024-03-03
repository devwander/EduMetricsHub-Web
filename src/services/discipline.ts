import { api } from "@/lib";
import { Discipline, Paginate } from "@/models";
import { QueryDiscipline } from "@/models/params.model";

export default class DisciplineService {
  public async paginate(
    params: Partial<QueryDiscipline>
  ): Promise<Paginate<Discipline>> {
    const { page, perPage } = params;

    const { data: pagination } = await api.get<any>(`university/disciplines`, {
      params: {
        page,
        perPage,
      },
    });
    return pagination;
  }
}
