import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFinspaceKxUserArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFinspaceKxUserArgs {
  environment_id: string;
  iam_role: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsFinspaceKxUserArgsTimeouts;
}

export class aws_finspace_kx_user extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsFinspaceKxUserArgs) {
    super(config, "resource", args, resourceName, "aws_finspace_kx_user");
  }
}
