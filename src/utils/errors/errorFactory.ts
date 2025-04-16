import { AppError } from "./AppError";
import { ErrorCode, errorDictionary } from "./errorCodes";

export interface MessageParams {
  [key: string]: string | number;
}

export class ErrorFactory {
  static create(
    errorCode: ErrorCode,
    messageParams?: MessageParams | string,
    isOperational = true
  ): AppError {
    const errorDef = errorDictionary[errorCode];
    let finalMessage: string;

    if (typeof messageParams === "string") {
      finalMessage = messageParams;
    } else if (messageParams && errorDef.messageTemplate) {
      finalMessage = this.interpolateMessage(
        errorDef.messageTemplate,
        messageParams
      );
    } else {
      finalMessage = errorDef.defaultMessage;
    }

    return new AppError(
      finalMessage,
      errorDef.statusCode,
      errorCode,
      isOperational
    );
  }

  private static interpolateMessage(
    template: string,
    params: MessageParams
  ): string {
    return template.replace(/\${(\w+)}/g, (match, key) => {
      return params[key]?.toString() || match;
    });
  }
}
