import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2ClientVpnEndpointArgsAuthenticationOptions {
  active_directory_id?: string;
  root_certificate_chain_arn?: string;
  saml_provider_arn?: string;
  self_service_saml_provider_arn?: string;
  type: string;
}

export interface AwsEc2ClientVpnEndpointArgsClientConnectOptions {
}

export interface AwsEc2ClientVpnEndpointArgsClientLoginBannerOptions {
}

export interface AwsEc2ClientVpnEndpointArgsConnectionLogOptions {
  cloudwatch_log_group?: string;
  enabled: boolean;
}

export interface AwsEc2ClientVpnEndpointArgs {
  client_cidr_block: string;
  description?: string;
  dns_servers?: string[];
  self_service_portal?: string;
  server_certificate_arn: string;
  session_timeout_hours?: number;
  split_tunnel?: boolean;
  tags?: { [key: string]: string };
  transport_protocol?: string;
  vpn_port?: number;
  authentication_options: AwsEc2ClientVpnEndpointArgsAuthenticationOptions;
  client_connect_options: AwsEc2ClientVpnEndpointArgsClientConnectOptions;
  client_login_banner_options: AwsEc2ClientVpnEndpointArgsClientLoginBannerOptions;
  connection_log_options: AwsEc2ClientVpnEndpointArgsConnectionLogOptions;
}

export class aws_ec2_client_vpn_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly dns_name!: string;
  readonly id?: string;
  readonly security_group_ids?: string[];
  readonly self_service_portal_url!: string;
  readonly tags_all?: { [key: string]: string };
  readonly vpc_id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2ClientVpnEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_client_vpn_endpoint");
  }
}
