export enum HttpStatusCode {
  ok = 200,
  badRequest = 400,
  unathorized = 401,
  notFound = 404,
  serverError = 500,
  noContent = 204
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
