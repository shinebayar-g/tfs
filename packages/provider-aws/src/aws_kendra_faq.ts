import { TerraformConfig, TerraformResource } from "tfs";
export interface S3Path {
  bucket: string;
  key: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsKendraFaqArgs {
  description?: string;
  file_format?: string;
  index_id: string;
  name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  s3_path: S3Path;
  timeouts: Timeouts;
}
export class aws_kendra_faq extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly error_message!: string;
  readonly faq_id!: string;
  readonly id?: string;
  readonly language_code?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly updated_at!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKendraFaqArgs) {
    super(config, "resource", args, resourceName, "aws_kendra_faq");
  }
}