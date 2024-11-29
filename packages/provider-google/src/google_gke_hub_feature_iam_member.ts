import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleGkeHubFeatureIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: Condition;
}
export class google_gke_hub_feature_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubFeatureIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_feature_iam_member");
  }
}