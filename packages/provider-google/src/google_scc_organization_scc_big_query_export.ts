import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccOrganizationSccBigQueryExportArgs {
  big_query_export_id: string;
  dataset?: string;
  description?: string;
  filter?: string;
  organization: string;
  timeouts: Timeouts;
}
export class google_scc_organization_scc_big_query_export extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly principal!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccOrganizationSccBigQueryExportArgs) {
    super(config, "resource", args, resourceName, "google_scc_organization_scc_big_query_export");
  }
}