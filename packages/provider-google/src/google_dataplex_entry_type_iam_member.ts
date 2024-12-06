import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexEntryTypeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexEntryTypeIamMemberArgs {
  entry_type_id: string;
  member: string;
  role: string;
  condition: GoogleDataplexEntryTypeIamMemberArgsCondition;
}

export class google_dataplex_entry_type_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexEntryTypeIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_entry_type_iam_member");
  }
}
