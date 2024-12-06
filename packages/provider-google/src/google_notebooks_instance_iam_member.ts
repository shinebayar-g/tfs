import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNotebooksInstanceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleNotebooksInstanceIamMemberArgs {
  instance_name: string;
  member: string;
  role: string;
  condition: GoogleNotebooksInstanceIamMemberArgsCondition;
}

export class google_notebooks_instance_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksInstanceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_instance_iam_member");
  }
}
