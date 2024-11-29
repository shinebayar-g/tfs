import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigtableInstanceIamPolicyArgs {
  instance: string;
  policy_data: string;
}
export class google_bigtable_instance_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableInstanceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_instance_iam_policy");
  }
}