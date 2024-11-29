import { TerraformConfig, TerraformResource } from "tfs";
export interface SourceS3Path {
  bucket: string;
  key: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKendraThesaurusArgs {
  description?: string;
  index_id: string;
  name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  source_s3_path: SourceS3Path;
  timeouts: Timeouts;
}
export class aws_kendra_thesaurus extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly thesaurus_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKendraThesaurusArgs) {
    super(config, "resource", args, resourceName, "aws_kendra_thesaurus");
  }
}