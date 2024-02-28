import type { ReactElement } from "react";

import { Form } from "./form";
import * as S from "./styles";

export function Signin(): ReactElement {
  return (
    <S.Layout>
      <img
        src={"/logo.svg"}
        width={300}
        height={100}
        alt="EduMetricsHub Logo"
      />

      <Form />
    </S.Layout>
  );
}
