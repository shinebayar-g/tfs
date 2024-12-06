import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkEndpointArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeNetworkEndpointArgs {
  instance?: string;
  ip_address: string;
  network_endpoint_group: string;
  port?: number;
  timeouts?: GoogleComputeNetworkEndpointArgsTimeouts;
}

export class google_compute_network_endpoint extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkEndpointArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_endpoint");
  }
}
