import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoveryreadinessReadinessCheckArgsTimeouts {
  delete?: string;
}

export interface AwsRoute53recoveryreadinessReadinessCheckArgs {
  readiness_check_name: string;
  resource_set_name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRoute53recoveryreadinessReadinessCheckArgsTimeouts;
}

export class aws_route53recoveryreadiness_readiness_check extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53recoveryreadinessReadinessCheckArgs) {
    super(config, "resource", args, resourceName, "aws_route53recoveryreadiness_readiness_check");
  }
}
