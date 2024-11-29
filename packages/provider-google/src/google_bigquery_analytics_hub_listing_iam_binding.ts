import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigqueryAnalyticsHubListingIamBindingArgs {
  data_exchange_id: string;
  listing_id: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_bigquery_analytics_hub_listing_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryAnalyticsHubListingIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_analytics_hub_listing_iam_binding");
  }
}