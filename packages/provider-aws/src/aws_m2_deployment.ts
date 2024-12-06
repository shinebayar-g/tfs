import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsM2DeploymentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsM2DeploymentArgs {
  application_id: string;
  application_version: number;
  environment_id: string;
  force_stop?: boolean;
  start: boolean;
  timeouts?: AwsM2DeploymentArgsTimeouts;
}

export class aws_m2_deployment extends TerraformResource {
  readonly deployment_id!: string;
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsM2DeploymentArgs) {
    super(config, "resource", args, resourceName, "aws_m2_deployment");
  }
}
