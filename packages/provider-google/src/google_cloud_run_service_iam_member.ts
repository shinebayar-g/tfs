import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudRunServiceIamMemberArgs {
  member: string;
  role: string;
  service: string;
  condition: GoogleCloudRunServiceIamMemberArgsCondition;
}

export class google_cloud_run_service_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunServiceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_service_iam_member");
  }
}
