import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface AwsRoute53profilesResourceAssociationArgs {
  name: string;
  profile_id: string;
  resource_arn: string;
  resource_properties?: string;
  timeouts: Timeouts;
}
export class aws_route53profiles_resource_association extends TerraformResource {
  readonly id!: string;
  readonly owner_id!: string;
  readonly resource_type!: string;
  readonly status!: string;
  readonly status_message!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53profilesResourceAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_route53profiles_resource_association");
  }
}