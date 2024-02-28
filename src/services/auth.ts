import { api } from "@/lib/api";
import type { AuthRequest, AuthResponse } from "@/models";

export default class AuthService {
  public async signin(data: AuthRequest): Promise<AuthResponse> {
    const { data: authentication } = await api.post<AuthResponse>(
      "login",
      data
    );
    return authentication;
  }
}
