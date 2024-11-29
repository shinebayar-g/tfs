import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsAccountRegionArgs {
  account_id?: string;
  enabled: boolean;
  region_name: string;
  timeouts: Timeouts;
}
export class aws_account_region extends TerraformResource {
  readonly id?: string;
  readonly opt_status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAccountRegionArgs) {
    super(config, "resource", args, resourceName, "aws_account_region");
  }
}