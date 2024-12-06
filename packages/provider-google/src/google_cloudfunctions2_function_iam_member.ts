import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudfunctions2FunctionIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudfunctions2FunctionIamMemberArgs {
  cloud_function: string;
  member: string;
  role: string;
  condition: GoogleCloudfunctions2FunctionIamMemberArgsCondition;
}

export class google_cloudfunctions2_function_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudfunctions2FunctionIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_cloudfunctions2_function_iam_member");
  }
}
