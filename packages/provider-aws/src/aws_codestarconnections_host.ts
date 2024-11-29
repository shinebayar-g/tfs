import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcConfiguration {
  security_group_ids: string[];
  subnet_ids: string[];
  tls_certificate?: string;
  vpc_id: string;
}
export interface AwsCodestarconnectionsHostArgs {
  name: string;
  provider_endpoint: string;
  provider_type: string;
  timeouts: Timeouts;
  vpc_configuration: VpcConfiguration;
}
export class aws_codestarconnections_host extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodestarconnectionsHostArgs) {
    super(config, "resource", args, resourceName, "aws_codestarconnections_host");
  }
}