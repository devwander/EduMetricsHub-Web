import type { ValidationCode } from "./auth.model";
import type { BaseUuid } from "./base.model";

export interface User extends BaseUuid {
  name: string;
  email: string;
  password: string;
  validation_codes: ValidationCode[];
}
