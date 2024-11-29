import { TerraformConfig, TerraformResource } from "tfs";
export interface S3Destination {
  bucket: string;
  encryption_disabled?: boolean;
  encryption_key: string;
  packaging?: string;
  path?: string;
}
export interface ExportConfig {
  type: string;
  s3_destination: S3Destination;
}
export interface AwsCodebuildReportGroupArgs {
  delete_reports?: boolean;
  name: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  export_config: ExportConfig;
}
export class aws_codebuild_report_group extends TerraformResource {
  readonly arn!: string;
  readonly created!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodebuildReportGroupArgs) {
    super(config, "resource", args, resourceName, "aws_codebuild_report_group");
  }
}