import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataCatalogTagTemplateIamMemberArgs {
  member: string;
  role: string;
  tag_template: string;
  condition: Condition;
}
export class google_data_catalog_tag_template_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogTagTemplateIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_tag_template_iam_member");
  }
}