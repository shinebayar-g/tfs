import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIotTopicRuleDestinationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsIotTopicRuleDestinationArgsVpcConfiguration {
  role_arn: string;
  security_groups?: string[];
  subnet_ids: string[];
  vpc_id: string;
}
export interface AwsIotTopicRuleDestinationArgs {
  enabled?: boolean;
  timeouts: AwsIotTopicRuleDestinationArgstimeouts;
  vpc_configuration: AwsIotTopicRuleDestinationArgsVpcConfiguration;
}
export class aws_iot_topic_rule_destination extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotTopicRuleDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_iot_topic_rule_destination");
  }
}