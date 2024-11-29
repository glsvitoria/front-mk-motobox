export const masks = {
  currency: (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(value / 100);
  },
  km: (value: number) => {
    return new Intl.NumberFormat("pt-BR").format(value) + " km";
  },
};
