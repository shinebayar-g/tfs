import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunV2JobIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudRunV2JobIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleCloudRunV2JobIamMemberArgsCondition;
}

export class google_cloud_run_v2_job_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunV2JobIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_v2_job_iam_member");
  }
}
