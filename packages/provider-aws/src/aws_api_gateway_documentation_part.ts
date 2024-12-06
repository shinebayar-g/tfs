import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayDocumentationPartArgsLocation {
  method?: string;
  name?: string;
  path?: string;
  status_code?: string;
  type: string;
}

export interface AwsApiGatewayDocumentationPartArgs {
  properties: string;
  rest_api_id: string;
  location: AwsApiGatewayDocumentationPartArgsLocation;
}

export class aws_api_gateway_documentation_part extends TerraformResource {
  readonly documentation_part_id!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayDocumentationPartArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_documentation_part");
  }
}
