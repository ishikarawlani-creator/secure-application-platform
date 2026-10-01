# Secure Application Platform

* Project Overview

This project demonstrates a defence-in-depth security architecture for a secure application platform using AWS security services.

The project implements multiple security layers covering identity, application protection, encryption, secrets management, least-privilege access, monitoring, auditing, and security testing.

* AWS Services Used

- Amazon Cognito
- AWS WAF
- Amazon API Gateway
- AWS KMS
- AWS Secrets Manager
- AWS IAM
- IAM Access Analyzer
- AWS CloudTrail
- Amazon CloudWatch
- AWS Lambda

* Security Controls Implemented

### 1. Identity and Authentication

- Cognito User Pool configured for application authentication.
- MFA using an authenticator application.
- Admin and user groups configured.
- JWT-based authentication implemented.
- Admin-only authorization route implemented.

### 2. Web Application Protection

- AWS WAF configured to protect the API Gateway endpoint.
- AWS Managed Rules enabled.
- SQL injection and XSS protection configured.
- Rate-based protection configured.
- Malicious requests tested and blocked.

### 3. Encryption and Secrets Management

- Customer-managed AWS KMS key created.
- AWS Secrets Manager used for application secret storage.
- Automatic secret rotation configured.
- Runtime secret retrieval demonstrated.
- Unauthorized secret and KMS access tested and denied.
- HTTPS/TLS protection verified.

### 4. Least-Privilege IAM

- Dedicated IAM roles created for application components.
- Permissions scoped to required resources.
- IAM policy simulation used to verify allowed and denied actions.
- IAM Access Analyzer used to review access findings.

### 5. Monitoring and Auditing

- AWS CloudTrail used for security auditing.
- Secrets Manager and KMS activity monitored.
- AWS WAF logging enabled.
- CloudWatch metrics and alarms configured.
- Security-relevant events reviewed through logs and alarms.

* Security Testing

The project includes testing for:

- Unauthenticated API access
- Authenticated user access
- Unauthorized admin access
- Admin authorization
- MFA authentication
- WAF-blocked malicious requests
- Rate-based WAF protection
- Unauthorized Secrets Manager access
- Unauthorized KMS decryption
- CloudTrail audit events
- CloudWatch security monitoring

* Project Documentation

## Project Documentation

The complete project report contains the implementation evidence, screenshots, security testing results, monitoring evidence, limitations, and final project summary.

### Documentation

- [Project Report](./Ishika_Rawlani_Project_Report_22_September_2026_Final-1.pdf)
- [Security Controls](./docs/security-controls.md)
- [Attack Walkthrough](./docs/attack-walkthrough.md)
- [Dry Run Checklist](./docs/dry-run-checklist.md)
- [Teardown Guide](./docs/teardown.md)

## Architecture

The security architecture diagram is available in:

`file_00000000070c8211a0a359d162d7aed3.png`

## Security and Confidentiality

No passwords, access keys, client secrets, TOTP secrets, authentication tokens, or other sensitive credentials are included in this repository.

AWS account identifiers and other sensitive information shown in evidence have been redacted where applicable.

## Project Status

The implemented security controls and testing evidence are documented in the accompanying project report.

## Author

Ishika Rawlani

Cloud Engineer Level 3  
Shreik Global
