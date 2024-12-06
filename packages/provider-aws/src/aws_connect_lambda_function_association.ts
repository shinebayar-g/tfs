import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectLambdaFunctionAssociationArgs {
  function_arn: string;
  instance_id: string;
}

export class aws_connect_lambda_function_association extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectLambdaFunctionAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_connect_lambda_function_association");
  }
}
