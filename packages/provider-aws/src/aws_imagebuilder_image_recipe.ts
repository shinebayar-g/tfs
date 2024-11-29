import { TerraformConfig, TerraformResource } from "tfs";
export interface Ebs {
  delete_on_termination?: string;
  encrypted?: string;
  iops?: number;
  kms_key_id?: string;
  snapshot_id?: string;
  throughput?: number;
  volume_size?: number;
  volume_type?: string;
}
export interface BlockDeviceMapping {
  device_name?: string;
  virtual_name?: string;
  ebs: Ebs;
}
export interface Parameter {
  name: string;
  value: string;
}
export interface Component {
  component_arn: string;
  parameter: Parameter;
}
export interface SystemsManagerAgent {
  uninstall_after_build: boolean;
}
export interface AwsImagebuilderImageRecipeArgs {
  description?: string;
  name: string;
  parent_image: string;
  tags?: {
    [key: string]: string;
  };
  version: string;
  working_directory?: string;
  block_device_mapping: BlockDeviceMapping;
  component: Component;
  systems_manager_agent: SystemsManagerAgent;
}
export class aws_imagebuilder_image_recipe extends TerraformResource {
  readonly arn!: string;
  readonly date_created!: string;
  readonly id?: string;
  readonly owner!: string;
  readonly platform!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly user_data_base64?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderImageRecipeArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_image_recipe");
  }
}