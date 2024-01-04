import { TMajor } from "types/certificate";
import { create } from "zustand";

type CertificateStore = {
  prename: string;
  major: TMajor;
  year: number;
  setPrename: (prename: string) => void;
  setMajor: (major: TMajor) => void;
  setYear: (year: number) => void;
};

export const useCertificateStore = create<CertificateStore>()((set) => ({
  prename: "",
  major: "CE",
  year: 1,
  setPrename: (prename: string) => set({ prename: prename }),
  setMajor: (major: TMajor) => set({ major: major }),
  setYear: (year: number) => set({ year: year })
}));
