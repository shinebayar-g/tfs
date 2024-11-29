import { Provider, Terraform, TerraformConfig } from '@konfjs/core';
import { google_service_account } from '@konfjs/provider-google/google_service_account';

const main = new TerraformConfig('main.tf');

new google_service_account(main, 'my_service_account', {
    account_id: 'my-service-account',
});

new Terraform(main, {
    backend: {
        gcs: {
            bucket: 'my-bucket',
            prefix: 'terraform/state',
        },
    },
    required_version: '>= 1.9.0',
    required_providers: {
        google: {
            source: 'hashicorp/google',
            version: '6.12.0',
        },
    },
});

new Provider(main, 'google', {
    project: 'foo',
    region: 'us-west1',
});

main.save();
