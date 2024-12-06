import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOamSinkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsOamSinkArgs {
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsOamSinkArgsTimeouts;
}

export class aws_oam_sink extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly sink_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsOamSinkArgs) {
    super(config, "resource", args, resourceName, "aws_oam_sink");
  }
}
