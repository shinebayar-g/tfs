import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface CheckCertificateRevocationStatus {
  revoked_status_action?: string;
  unknown_status_action?: string;
}
export interface Destination {
  address_definition: string;
}
export interface DestinationPorts {
  from_port: number;
  to_port: number;
}
export interface Source {
  address_definition: string;
}
export interface SourcePorts {
  from_port: number;
  to_port: number;
}
export interface Scope {
  protocols: number[];
  destination: Destination;
  destination_ports: DestinationPorts;
  source: Source;
  source_ports: SourcePorts;
}
export interface ServerCertificate {
  resource_arn?: string;
}
export interface ServerCertificateConfiguration {
  certificate_authority_arn?: string;
  check_certificate_revocation_status: CheckCertificateRevocationStatus;
  scope: Scope;
  server_certificate: ServerCertificate;
}
export interface TlsInspectionConfiguration {
  server_certificate_configuration: ServerCertificateConfiguration;
}
export interface AwsNetworkfirewallTlsInspectionConfigurationArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
  tls_inspection_configuration: TlsInspectionConfiguration;
}
export class aws_networkfirewall_tls_inspection_configuration extends TerraformResource {
  readonly arn!: string;
  readonly certificate_authority!: any[];
  readonly certificates!: any[];
  readonly encryption_configuration?: any[];
  readonly id!: string;
  readonly number_of_associations!: number;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly tls_inspection_configuration_id!: string;
  readonly update_token!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkfirewallTlsInspectionConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_networkfirewall_tls_inspection_configuration");
  }
}