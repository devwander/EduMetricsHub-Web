import { api } from "@/lib";
import {
  Discipline,
  DisciplineOffer,
  DisciplineProgress,
  Paginate,
} from "@/models";
import { QueryDiscipline } from "@/models/params.model";

export default class DisciplineService {
  public async paginate(
    params: Partial<QueryDiscipline>
  ): Promise<Paginate<Discipline>> {
    const { page, perPage, search } = params;

    const { data: pagination } = await api.get<any>(`university/disciplines`, {
      params: {
        page,
        perPage,
        search,
      },
    });
    return pagination;
  }

  public async show(id: string | number): Promise<Discipline> {
    const { data } = await api.get<Discipline>(`university/discipline/${id}`);
    return data;
  }

  public async progress(id: string | number): Promise<DisciplineProgress> {
    const { data } = await api.get<DisciplineProgress>(
      `university/discipline/data/progress/${id}`
    );
    return data;
  }

  public async offer(id: string | number): Promise<DisciplineOffer[]> {
    const { data } = await api.get<DisciplineOffer[]>(
      `/university/discipline/data/offer/${id}`
    );
    return data;
  }
}
