/* eslint-disable @typescript-eslint/typedef */

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class StatusCodes {
  public static readonly CONTINUE = 100 as const;
  public static readonly SWITCHING_PROTOCOLS = 101 as const;
  public static readonly PROCESSING = 102 as const;
  public static readonly EARLY_HINTS = 103 as const;

  public static readonly OK = 200 as const;
  public static readonly CREATED = 201 as const;
  public static readonly ACCEPTED = 202 as const;
  public static readonly NON_AUTHORITATIVE_INFORMATION = 203 as const;
  public static readonly NO_CONTENT = 204 as const;
  public static readonly RESET_CONTENT = 205 as const;
  public static readonly PARTIAL_CONTENT = 206 as const;
  public static readonly MULTI_STATUS = 207 as const;
  public static readonly ALREADY_REPORTED = 208 as const;
  public static readonly IM_USED = 226 as const;

  public static readonly MULTIPLE_CHOICES = 300 as const;
  public static readonly MOVED_PERMANENTLY = 301 as const;
  public static readonly FOUND = 302 as const;
  public static readonly SEE_OTHER = 303 as const;
  public static readonly NOT_MODIFIED = 304 as const;
  public static readonly USE_PROXY = 305 as const;
  public static readonly TEMPORARY_REDIRECT = 307 as const;
  public static readonly PERMANENT_REDIRECT = 308 as const;

  public static readonly BAD_REQUEST = 400 as const;
  public static readonly UNAUTHORIZED = 401 as const;
  public static readonly PAYMENT_REQUIRED = 402 as const;
  public static readonly FORBIDDEN = 403 as const;
  public static readonly NOT_FOUND = 404 as const;
  public static readonly METHOD_NOT_ALLOWED = 405 as const;
  public static readonly NOT_ACCEPTABLE = 406 as const;
  public static readonly PROXY_AUTHENTICATION_REQUIRED = 407 as const;
  public static readonly REQUEST_TIMEOUT = 408 as const;
  public static readonly CONFLICT = 409 as const;
  public static readonly GONE = 410 as const;
  public static readonly LENGTH_REQUIRED = 411 as const;
  public static readonly PRECONDITION_FAILED = 412 as const;
  public static readonly PAYLOAD_TOO_LARGE = 413 as const;
  public static readonly URI_TOO_LONG = 414 as const;
  public static readonly UNSUPPORTED_MEDIA_TYPE = 415 as const;
  public static readonly RANGE_NOT_SATISFIABLE = 416 as const;
  public static readonly EXPECTATION_FAILED = 417 as const;
  public static readonly IM_A_TEAPOT = 418 as const;
  public static readonly MISDIRECTED_REQUEST = 421 as const;
  public static readonly UNPROCESSABLE_ENTITY = 422 as const;
  public static readonly LOCKED = 423 as const;
  public static readonly FAILED_DEPENDENCY = 424 as const;
  public static readonly TOO_EARLY = 425 as const;
  public static readonly UPGRADE_REQUIRED = 426 as const;
  public static readonly PRECONDITION_REQUIRED = 428 as const;
  public static readonly TOO_MANY_REQUESTS = 429 as const;
  public static readonly REQUEST_HEADER_FIELDS_TOO_LARGE = 431 as const;
  public static readonly UNAVAILABLE_FOR_LEGAL_REASONS = 451 as const;

  public static readonly INTERNAL_SERVER_ERROR = 500 as const;
  public static readonly NOT_IMPLEMENTED = 501 as const;
  public static readonly BAD_GATEWAY = 502 as const;
  public static readonly SERVICE_UNAVAILABLE = 503 as const;
  public static readonly GATEWAY_TIMEOUT = 504 as const;
  public static readonly HTTP_VERSION_NOT_SUPPORTED = 505 as const;
  public static readonly VARIANT_ALSO_NEGOTIATES = 506 as const;
  public static readonly INSUFFICIENT_STORAGE = 507 as const;
  public static readonly LOOP_DETECTED = 508 as const;
  public static readonly NOT_EXTENDED = 510 as const;
  public static readonly NETWORK_AUTHENTICATION_REQUIRED = 511 as const;
}


