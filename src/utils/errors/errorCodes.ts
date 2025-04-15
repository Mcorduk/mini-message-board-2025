export enum ErrorCode {
  // Authentication & Authorization
  UNAUTHORIZED = "AUTH001",
  INVALID_TOKEN = "AUTH002",

  // Resource errors
  RESOURCE_NOT_FOUND = "RES001",
  RESOURCE_ALREADY_EXISTS = "RES002",

  // Validation errors
  INVALID_INPUT = "VAL001",
  MISSING_REQUIRED_FIELD = "VAL002",

  // Database errors
  DB_CONNECTION_ERROR = "DB001",
  QUERY_FAILED = "DB002",

  // System errors
  INTERNAL_SERVER_ERROR = "SYS001",
  EXTERNAL_API_ERROR = "SYS002",
}

interface ErrorDefinition {
  statusCode: number;
  defaultMessage: string;
  messageTemplate?: string;
}

export const errorDictionary: Record<ErrorCode, ErrorDefinition> = {
  [ErrorCode.UNAUTHORIZED]: {
    statusCode: 401,
    defaultMessage: "Unauthorized access",
    messageTemplate: "Unauthorized access: ${reason}",
  },

  [ErrorCode.INVALID_TOKEN]: {
    statusCode: 401,
    defaultMessage: "Invalid authentication token",
    messageTemplate: "Invalid token: ${reason}",
  },

  [ErrorCode.RESOURCE_NOT_FOUND]: {
    statusCode: 404,
    defaultMessage: "Resource not found",
    messageTemplate: "${resourceType} with ${identifier} not found",
  },

  [ErrorCode.RESOURCE_ALREADY_EXISTS]: {
    statusCode: 409,
    defaultMessage: "Resource already exists",
    messageTemplate: "${resourceType} with ${identifier} already exists",
  },

  [ErrorCode.INVALID_INPUT]: {
    statusCode: 400,
    defaultMessage: "Invalid input provided",
    messageTemplate: "Invalid input: ${reason}",
  },

  [ErrorCode.MISSING_REQUIRED_FIELD]: {
    statusCode: 400,
    defaultMessage: "Required field missing",
    messageTemplate: 'The field "${fieldName}" is required',
  },

  [ErrorCode.DB_CONNECTION_ERROR]: {
    statusCode: 500,
    defaultMessage: "Database connection error",
    messageTemplate: "Failed to connect to database: ${reason}",
  },

  [ErrorCode.QUERY_FAILED]: {
    statusCode: 500,
    defaultMessage: "Database query failed",
    messageTemplate: "Failed to ${operation} ${entity}",
  },

  [ErrorCode.INTERNAL_SERVER_ERROR]: {
    statusCode: 500,
    defaultMessage: "Internal server error",
    messageTemplate: "Internal server error: ${details}",
  },
  [ErrorCode.EXTERNAL_API_ERROR]: {
    statusCode: 502,
    defaultMessage: "External API error",
    messageTemplate: "External API error: ${service} - ${message}",
  },
};
