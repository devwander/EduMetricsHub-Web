export function disciplineType(type: number): string {
  return type === 1 ? "Obrigatória" : "Eletiva";
}

export function disciplineStatus(status: number): string {
  switch (status) {
    case 0:
      return "Não cursada";
    case 1:
      return "Aprovada";
    case 2:
      return "Aprovada com média";
    case 3:
      return "Reprovada";
    case 4:
      return "Reprovada por falta";
    case 5:
      return "Cursando";
    case 6:
      return "Cancelado com onus";
    case 7:
      return "Dispensado";
    default:
      return "Status desconhecido";
  }
}
