import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatchLayer4Configs {
  ip_protocol: string;
  ports?: string[];
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatchSrcSecureTags {
  name?: string;
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatch {
  dest_address_groups?: string[];
  dest_fqdns?: string[];
  dest_ip_ranges?: string[];
  dest_region_codes?: string[];
  dest_threat_intelligences?: string[];
  src_address_groups?: string[];
  src_fqdns?: string[];
  src_ip_ranges?: string[];
  src_region_codes?: string[];
  src_threat_intelligences?: string[];
  layer4_configs: GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatchLayer4Configs;
  src_secure_tags: GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatchSrcSecureTags;
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsTargetSecureTags {
  name?: string;
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgs {
  action: string;
  description?: string;
  direction: string;
  disabled?: boolean;
  enable_logging?: boolean;
  firewall_policy: string;
  priority: number;
  rule_name?: string;
  security_profile_group?: string;
  target_service_accounts?: string[];
  tls_inspect?: boolean;
  match: GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatch;
  target_secure_tags: GoogleComputeRegionNetworkFirewallPolicyRuleArgsTargetSecureTags;
  timeouts?: GoogleComputeRegionNetworkFirewallPolicyRuleArgsTimeouts;
}

export class google_compute_region_network_firewall_policy_rule extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly kind!: string;
  readonly project?: string;
  readonly region?: string;
  readonly rule_tuple_count!: number;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionNetworkFirewallPolicyRuleArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_network_firewall_policy_rule");
  }
}
