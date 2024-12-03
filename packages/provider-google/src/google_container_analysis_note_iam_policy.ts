import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleContainerAnalysisNoteIamPolicyArgs {
  note: string;
  policy_data: string;
}
export class google_container_analysis_note_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAnalysisNoteIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_container_analysis_note_iam_policy");
  }
}