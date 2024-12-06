import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsComputeoptimizerEnrollmentStatusArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsComputeoptimizerEnrollmentStatusArgs {
  status: string;
  timeouts?: AwsComputeoptimizerEnrollmentStatusArgsTimeouts;
}

export class aws_computeoptimizer_enrollment_status extends TerraformResource {
  readonly id!: string;
  readonly include_member_accounts?: boolean;
  readonly number_of_member_accounts_opted_in!: number;

  constructor(config: TerraformConfig, resourceName: string, args: AwsComputeoptimizerEnrollmentStatusArgs) {
    super(config, "resource", args, resourceName, "aws_computeoptimizer_enrollment_status");
  }
}
