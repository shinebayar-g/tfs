import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMonitoringServiceArgsBasicService {
  service_labels?: { [key: string]: string };
  service_type?: string;
}

export interface GoogleMonitoringServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMonitoringServiceArgs {
  display_name?: string;
  service_id: string;
  user_labels?: { [key: string]: string };
  basic_service: GoogleMonitoringServiceArgsBasicService;
  timeouts?: GoogleMonitoringServiceArgsTimeouts;
}

export class google_monitoring_service extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly telemetry!: any[];

  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringServiceArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_service");
  }
}
