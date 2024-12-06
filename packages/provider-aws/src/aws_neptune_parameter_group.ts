import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNeptuneParameterGroupArgsParameter {
  apply_method?: string;
  name: string;
  value: string;
}

export interface AwsNeptuneParameterGroupArgs {
  description?: string;
  family: string;
  tags?: { [key: string]: string };
  parameter: AwsNeptuneParameterGroupArgsParameter;
}

export class aws_neptune_parameter_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsNeptuneParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_neptune_parameter_group");
  }
}
