import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmDevicePoolArgsRule {
  attribute?: string;
  operator?: string;
  value?: string;
}

export interface AwsDevicefarmDevicePoolArgs {
  description?: string;
  max_devices?: number;
  name: string;
  project_arn: string;
  tags?: { [key: string]: string };
  rule: AwsDevicefarmDevicePoolArgsRule;
}

export class aws_devicefarm_device_pool extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly type!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDevicefarmDevicePoolArgs) {
    super(config, "resource", args, resourceName, "aws_devicefarm_device_pool");
  }
}
