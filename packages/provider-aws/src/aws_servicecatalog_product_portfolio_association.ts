import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface AwsServicecatalogProductPortfolioAssociationArgs {
  accept_language?: string;
  portfolio_id: string;
  product_id: string;
  source_portfolio_id?: string;
  timeouts: Timeouts;
}
export class aws_servicecatalog_product_portfolio_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogProductPortfolioAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_product_portfolio_association");
  }
}