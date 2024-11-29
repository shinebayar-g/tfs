import { TerraformConfig, TerraformResource } from "tfs";
export interface ComputeConfig {
  dns_name_servers?: string;
  max_capacity_units?: number;
  min_capacity_units?: number;
  replication_subnet_group_id: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDmsReplicationConfigArgs {
  replication_config_identifier: string;
  replication_type: string;
  source_endpoint_arn: string;
  start_replication?: boolean;
  supplemental_settings?: string;
  table_mappings: string;
  tags?: {
    [key: string]: string;
  };
  target_endpoint_arn: string;
  compute_config: ComputeConfig;
  timeouts: Timeouts;
}
export class aws_dms_replication_config extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly replication_settings?: string;
  readonly resource_identifier?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDmsReplicationConfigArgs) {
    super(config, "resource", args, resourceName, "aws_dms_replication_config");
  }
}