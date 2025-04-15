// src/utils/errors/errorValidation.ts

import { ErrorCode } from "./errorCodes";

interface ErrorTemplate {
  requiredParams: string[];
}

const errorTemplates: Partial<Record<ErrorCode, ErrorTemplate>> = {
  [ErrorCode.RESOURCE_NOT_FOUND]: {
    requiredParams: ["resourceType", "identifier"],
  },
  [ErrorCode.MISSING_REQUIRED_FIELD]: {
    requiredParams: ["fieldName"],
  },
  [ErrorCode.QUERY_FAILED]: {
    requiredParams: ["operation", "entity"],
  },
};

export class ErrorValidator {
  static validateParams(errorCode: ErrorCode, params?: MessageParams): void {
    const template = errorTemplates[errorCode];
    if (!template) return;

    if (!params || typeof params === "string") {
      throw new Error(
        `Error ${errorCode} requires parameters: ${template.requiredParams.join(", ")}`
      );
    }

    const missingParams = template.requiredParams.filter(
      (param) => !(param in params)
    );
    if (missingParams.length > 0) {
      throw new Error(
        `Missing required parameters for error ${errorCode}: ${missingParams.join(", ")}`
      );
    }
  }
}
