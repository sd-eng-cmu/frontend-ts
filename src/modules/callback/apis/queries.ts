import { ApiRouteKey } from "common/constants/keys";
import { coreApi } from "core/connections";
import { nil } from "tsdef";
import { TResponseOK } from "types";
import { CertificateDto, CreateCertificateDto } from "types/certificate";

export function getLoginValidationQuery(code: string): Promise<nil> {
  return new Promise((resolve, reject) => {
    coreApi
      .post(ApiRouteKey.OAuth, null, {
        params: new URLSearchParams({ code })
      })
      .then((res) => resolve(res.data))
      .catch(reject);
  });
}

export function postCertificateRequest(
  payload: CreateCertificateDto
): Promise<TResponseOK<number>> {
  return new Promise((resolve, reject) => {
    coreApi
      .post(ApiRouteKey.Certificate, payload)
      .then((res) => resolve(res.data))
      .catch(reject);
  });
}

type TuploadFile = {
  files: File[];
  certId: number;
  type: string;
};

export function uploadFile(payload: TuploadFile) {
  const form = new FormData();
  payload.files.forEach((f, i) => form.append(`file${i}`, f));
  return new Promise((resolve, reject) => {
    coreApi
      .post(`/resources/${payload.type}/${payload.certId}`, form)
      .then((res) => resolve(res.data))
      .catch(reject);
  });
}

export function getAllCertificates(): Promise<TResponseOK<CertificateDto[]>> {
  return new Promise((resolve, reject) => {
    coreApi
      .get("/certs")
      .then((res) => resolve(res.data))
      .catch(reject);
  });
}

export function getStudentCertificates(
  student_code: number
): Promise<TResponseOK<CertificateDto[]>> {
  return new Promise((resolve, reject) => {
    coreApi
      .get(`/certs/${student_code}`)
      .then((res) => resolve(res.data))
      .catch(reject);
  });
}
