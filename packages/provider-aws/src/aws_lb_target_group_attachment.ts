import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLbTargetGroupAttachmentArgs {
  availability_zone?: string;
  port?: number;
  target_group_arn: string;
  target_id: string;
}
export class aws_lb_target_group_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLbTargetGroupAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_lb_target_group_attachment");
  }
}