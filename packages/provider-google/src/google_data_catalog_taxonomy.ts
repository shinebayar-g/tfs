import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTaxonomyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataCatalogTaxonomyArgs {
  activated_policy_types?: string[];
  description?: string;
  display_name: string;
  timeouts?: GoogleDataCatalogTaxonomyArgsTimeouts;
}

export class google_data_catalog_taxonomy extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly region?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogTaxonomyArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_taxonomy");
  }
}
