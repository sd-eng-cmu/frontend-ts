export type CreateCertificateDto = {
  prename: string;
  firstname: string;
  lastname: string;
  student_code: int;
  study_level: TEduLevel;
  year: int;
  major: TMajor;
  type: TDocType;
  reason: string;
};

export type TEduLevel = "Bachelor" | "Master" | "Philosophy";
export type TDocType = "Student" | "Conduct";
export type TMajor =
  | "EE"
  | "CE"
  | "IE"
  | "ISNE"
  | "CPE"
  | "MN"
  | "ME"
  | "MEPM"
  | "IGE"
  | "ROAI"
  | "IEL"
  | "ENVI";

export type TResource = "Photo" | "Document";
export type TValidate = "Exported" | "Accept" | "Waiting" | "Unaccept";

export type CertificateDto = {
  id: number;
  prename: string;
  firstname: string;
  lastname: string;
  student_code: int;
  study_level: TEduLevel;
  year: int;
  major: TMajor;
  academic_year: number;
  date_out?: Date;
  endorser_id?: int;
  status: TValidate;
  type: TDocType;
  document_no?: number;
  reason: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  endorser?: EndorserDto;
  unaccepts: UnacceptDto[];
  resources: ResourceDto[];
};

export type EndorserDto = {
  id: number;
  prename: string;
  firstname: string;
  lastname: string;
  position: string;
  created_at?: Date;
  updated_at?: Date;
};

export type UnacceptDto = {
  id: number;
  cert_id: number;
  reason: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
};

export type ResourceDto = {
  id: number;
  cert_id: number;
  type: TResource;
  path: string;
  deleted_at?: Date;
};
