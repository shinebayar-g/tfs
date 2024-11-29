import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpcEndpointPolicyArgs {
  vpc_endpoint_id: string;
  timeouts: Timeouts;
}
export class aws_vpc_endpoint_policy extends TerraformResource {
  readonly id?: string;
  readonly policy?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_policy");
  }
}