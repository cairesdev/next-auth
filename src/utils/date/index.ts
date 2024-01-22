import { LegislacoesModel } from "@/models";

/**
 * @description Converte uma data em string para uma data formatada no padrão brasileiro (dd/mm/aaaa).
 * @param dataString A data em formato de string.
 * @returns Uma string no formato de data brasileira.
 */
export function formatarDataBrasileira(dataString: string): string {
  const data = new Date(dataString);
  data.setMinutes(data.getTimezoneOffset());
  return data.toLocaleDateString("pt-BR");
}

/**
 * @description Converte uma data em formato de string para um timestamp Unix (número de milissegundos desde a Época).
 * @param dataString A data em formato de string.
 * @returns O timestamp Unix da data.
 */
export function converterDataParaTimestamp(dataString: string): number {
  const data = new Date(dataString);
  return data.getTime();
}

/**
 * @description Converte uma data em formato de string para o padrão AAAA-MM-DD.
 * @param date A data em formato de string.
 * @returns A data formatada no padrão AAAA-MM-DD.
 */
export function formatarDataParaAAAAMMDD(date: string): string {
  const d = new Date(date);
  d.setMinutes(d.getTimezoneOffset());
  d.toLocaleString("pt-BR");
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const formatData = (data: Date | undefined): Date => {
  const formattedData = data ? new Date(data) : new Date(data!);
  formattedData.setMinutes(formattedData.getTimezoneOffset());
  return formattedData;
};
