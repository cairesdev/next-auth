export const formatCnpj = (cnpj: string) => {
  return cnpj ? cnpj.replace(/\D/g, "") : cnpj;
};
