import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway"
import { formatJSONResponse } from "@libs/api-gateway"
import { middyfy } from "@libs/lambda"

const helthCheck: ValidatedEventAPIGatewayProxyEvent<{}> = async () => {
  return formatJSONResponse({ message: `Ok!` })
}

export const main = middyfy(helthCheck)
