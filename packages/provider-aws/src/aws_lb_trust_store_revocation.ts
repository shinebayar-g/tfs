import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLbTrustStoreRevocationArgstimeouts {
  create?: string;
}
export interface AwsLbTrustStoreRevocationArgs {
  revocations_s3_bucket: string;
  revocations_s3_key: string;
  revocations_s3_object_version?: string;
  trust_store_arn: string;
  timeouts: AwsLbTrustStoreRevocationArgstimeouts;
}
export class aws_lb_trust_store_revocation extends TerraformResource {
  readonly id?: string;
  readonly revocation_id!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLbTrustStoreRevocationArgs) {
    super(config, "resource", args, resourceName, "aws_lb_trust_store_revocation");
  }
}