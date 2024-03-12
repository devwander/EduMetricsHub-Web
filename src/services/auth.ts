import { api } from "@/lib/api";
import type {
  AuthRequest,
  AuthResponse,
  Paginate,
  QueryUser,
  User,
} from "@/models";

export default class AuthService {
  public async signin(data: AuthRequest): Promise<AuthResponse> {
    const { data: authentication } = await api.post<AuthResponse>(
      "login",
      data
    );
    return authentication;
  }

  public async paginate(params: Partial<QueryUser>): Promise<Paginate<User>> {
    const { page, perPage, search } = params;

    const { data: pagination } = await api.get<Paginate<User>>(`user/index`, {
      params: {
        page,
        perPage,
        search,
      },
    });
    return pagination;
  }
}
