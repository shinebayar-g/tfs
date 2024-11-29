import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3BucketObjectLockConfigurationArgsruleDefaultRetention {
  days?: number;
  mode?: string;
  years?: number;
}
export interface AwsS3BucketObjectLockConfigurationArgsrule {
  default_retention: AwsS3BucketObjectLockConfigurationArgsruleDefaultRetention;
}
export interface AwsS3BucketObjectLockConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  object_lock_enabled?: string;
  token?: string;
  rule: AwsS3BucketObjectLockConfigurationArgsrule;
}
export class aws_s3_bucket_object_lock_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketObjectLockConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_object_lock_configuration");
  }
}