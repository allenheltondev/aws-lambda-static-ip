[![Twitter][1.1]][1] [![GitHub][2.1]][2] [![LinkedIn][3.1]][3] [![Ready, Set, Cloud!][4.1]][4]
# Static IP Address from a Lambda Function
This repo is inteneded to provide an example SAM template of how to create a lambda function that sends outbound web traffic via a static IP

## Use Case
There are many use cases for why you would need a static IP for web traffic. The primary use case driving this design was for whitelisting IPs for integrations. Whether it's a website or a partner company, whitelisting IPs is a strong way to provide security for an integrator. 

## Deployment
This repo is configured to deploy into your AWS account out of the box in an effort to provide you with the quickest solution possible. Here is the deployment checklist:
1. Install and configure the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) on your machine.
2. Update the root `package.json` to replace the `REPLACE_WITH_BUCKET_NAME` variables with an [S3 bucket in your account](https://s3.console.aws.amazon.com/s3/home)
3. In a terminal window, run the `npm run deploy` command

## Outputs
The template will output two values:
* **TestEndpoint** - This is a public GET endpoint that will verify the lambda is executing outbound traffic with the created static IP address
* **StaticIpAddress** - The IP address created in your account. *This is the IP address that your traffic will route through.*

## Resources
The following resources will be automatically deployed into your AWS Account:
* 1x [VPC](https://aws.amazon.com/vpc)
* 2x [Subnet](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) (One public and one private)
* 1x [Internet Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)
* 1x [NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)
* 2x [Route Table](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html) (One for the public subnet and one for the private subnet)
* 2x [Routes](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html#route-table-routes)
* 1x [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (Used to generate the static IP address)
* 1x [API Gateway](https://aws.amazon.com/api-gateway)
* 1x [Lambda Function](https://aws.amazon.com/lambda/)
* 1x [IAM Role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) (Used to execute the lambda function)

## Architecture
To facilitate sending outbound web traffic through a static IP, the below architecture is built.

![AWS Architecture diagram for a lambda with a static IP address](https://readysetcloud.s3.amazonaws.com/Static+IP.png)

## Support
If you like this repo and the accompanying [blog post](https://www.readysetcloud.io/blog/allen.helton/setup-static-ip-lambda-the-easy-way), show your support by following me on [Twitter][1] or connecting with me on [LinkedIn][3]. I'm always happy to answer any questions you might have and am open to any ideas you'd like to see turned into an article on my [blog][4]!

[1.1]: http://i.imgur.com/tXSoThF.png
[2.1]: http://i.imgur.com/0o48UoR.png
[3.1]: http://i.imgur.com/lGwB1Hk.png
[4.1]: https://readysetcloud.s3.amazonaws.com/logo.png

[1]: http://www.twitter.com/allenheltondev
[2]: http://www.github.com/allenheltondev
[3]: https://www.linkedin.com/in/allen-helton-85aa9650/
[4]: https://readysetcloud.io