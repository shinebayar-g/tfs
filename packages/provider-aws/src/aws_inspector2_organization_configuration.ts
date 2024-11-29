import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsInspector2OrganizationConfigurationArgsAutoEnable {
  ec2: boolean;
  ecr: boolean;
  lambda?: boolean;
  lambda_code?: boolean;
}
export interface AwsInspector2OrganizationConfigurationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsInspector2OrganizationConfigurationArgs {
  auto_enable: AwsInspector2OrganizationConfigurationArgsAutoEnable;
  timeouts: AwsInspector2OrganizationConfigurationArgstimeouts;
}
export class aws_inspector2_organization_configuration extends TerraformResource {
  readonly id?: string;
  readonly max_account_limit_reached!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsInspector2OrganizationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_inspector2_organization_configuration");
  }
}