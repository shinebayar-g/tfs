import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMemorydbParameterGroupArgsParameter {
  name: string;
  value: string;
}

export interface AwsMemorydbParameterGroupArgs {
  description?: string;
  family: string;
  tags?: { [key: string]: string };
  parameter: AwsMemorydbParameterGroupArgsParameter;
}

export class aws_memorydb_parameter_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsMemorydbParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_memorydb_parameter_group");
  }
}
