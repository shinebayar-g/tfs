import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRamResourceShareArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRamResourceShareArgs {
  allow_external_principals?: boolean;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRamResourceShareArgsTimeouts;
}

export class aws_ram_resource_share extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly permission_arns?: string[];
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsRamResourceShareArgs) {
    super(config, "resource", args, resourceName, "aws_ram_resource_share");
  }
}
