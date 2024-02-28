import { zodResolver } from "@hookform/resolvers/zod";
import type { TextFieldProps } from "@mui/material";
import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { EnvelopeSimple, Lock } from "@phosphor-icons/react";
import type { ReactElement } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Color } from "@/lib/mui";
import { useSigninMutation } from "@/mutation";
import { authStore } from "@/store";

import { PasswordAdornment } from "./password-adornment";
import type { SigninType } from "./schemas";
import { SigninSchema } from "./schemas";
import * as S from "./styles";
interface InputAdornmentProp {
  email?: Partial<TextFieldProps["InputProps"]>;
  password?: Partial<TextFieldProps["InputProps"]>;
}

export function Form(): ReactElement {
  const navigate = useNavigate();
  const [viewPass, setViewPass] = useState(false);

  const Adornment: InputAdornmentProp = {
    email: {
      startAdornment: (
        <InputAdornment position="start">
          <EnvelopeSimple size={22} />
        </InputAdornment>
      ),
    },
    password: {
      startAdornment: (
        <InputAdornment position="start">
          <Lock size={22} />
        </InputAdornment>
      ),
      endAdornment: (
        <PasswordAdornment
          visible={viewPass}
          onClick={() => setViewPass(!viewPass)}
        />
      ),
    },
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
  });

  const { authenticate } = authStore();

  const {
    mutateAsync: signin,
    isPending,
    isError,
  } = useSigninMutation({
    onError(error) {
      console.log(error);
      toast.error("Error ao efetuar login.");

      setError("email", {
        message: " ",
      });
      setError("password", {
        message: " ",
      });
    },
    onSuccess({ token: { token } }) {
      authenticate(token);
      toast.success("Login efetuado com sucesso!");
      navigate("/home");
    },
  });

  return (
    <S.Form
      component="form"
      onSubmit={handleSubmit((data) => signin(data))}
      sx={{
        padding: "1rem",
        borderRadius: "20px",
        backgroundColor: Color.NEUTRAL_12,
      }}
    >
      <Stack sx={{ gap: "0.25rem" }}>
        <FormControl>
          <Typography component="label" htmlFor="email-text-field">
            E-mail
          </Typography>
          <TextField
            sx={{
              backgroundColor: Color.NEUTRAL_14,
            }}
            id="email-text-field"
            aria-describedby="email-helper-text"
            placeholder="exemplo@email.com"
            variant="outlined"
            size="medium"
            fullWidth
            type="email"
            error={!!errors.email}
            InputProps={Adornment.email}
            autoComplete="current-email"
            {...register("email")}
          />
          <FormHelperText id="email-helper-text" error={!!errors.email}>
            {errors?.email?.message ?? " "}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <Typography component="label" htmlFor="password-text-field">
            Senha
          </Typography>
          <TextField
            sx={{
              backgroundColor: Color.NEUTRAL_14,
            }}
            id="password-text-field"
            aria-describedby="password-helper-text"
            placeholder="••••••••••"
            variant="outlined"
            size="medium"
            fullWidth
            autoComplete="current-password"
            type={viewPass ? "text" : "password"}
            error={!!errors.password}
            InputProps={Adornment.password}
            {...register("password")}
          />
          <FormHelperText id="password-helper-text" error={!!errors.password}>
            {errors?.password?.message ?? " "}
          </FormHelperText>
        </FormControl>
      </Stack>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        sx={{ backgroundColor: Color.GREEN_FINAL_01 }}
      >
        Entrar
      </Button>

      {isPending && (
        <Backdrop sx={{ zIndex: 9999 }} open={isPending && !isError}>
          <CircularProgress sx={{ color: Color.GREEN_FINAL_02 }} />
        </Backdrop>
      )}
    </S.Form>
  );
}
