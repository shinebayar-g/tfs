import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsAccountAlternateContactArgs {
  account_id?: string;
  alternate_contact_type: string;
  email_address: string;
  name: string;
  phone_number: string;
  title: string;
  timeouts: Timeouts;
}
export class aws_account_alternate_contact extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAccountAlternateContactArgs) {
    super(config, "resource", args, resourceName, "aws_account_alternate_contact");
  }
}