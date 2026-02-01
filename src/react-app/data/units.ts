export const lengthUnits = ["mm", "cm", "m", "km"];
export const areaUnits = ["mm²", "cm²", "m²", "km²"];
export const volumeUnits = ["mm³", "cm³", "m³", "km³"];

export const conversionFactors: Record<string, number> = {
  // Length
  mm: 1 / 1000,
  cm: 1 / 100,
  m: 1,
  km: 1000,

  // Area
  "mm²": (1 / 1000) ** 2,
  "cm²": (1 / 100) ** 2,
  "m²": 1,
  "km²": 1000 ** 2,

  // Volume
  "mm³": (1 / 1000) ** 3,
  "cm³": (1 / 100) ** 3,
  "m³": 1,
  "km³": 1000 ** 3,
};
