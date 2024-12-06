import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafXssMatchSetArgsXssMatchTuplesFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafXssMatchSetArgsXssMatchTuples {
  text_transformation: string;
  field_to_match: AwsWafXssMatchSetArgsXssMatchTuplesFieldToMatch;
}

export interface AwsWafXssMatchSetArgs {
  name: string;
  xss_match_tuples: AwsWafXssMatchSetArgsXssMatchTuples;
}

export class aws_waf_xss_match_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsWafXssMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_xss_match_set");
  }
}
