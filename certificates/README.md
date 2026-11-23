# Certificate files (optional)

Drop real certificate PDFs or images here to enable a **View certificate**
link on the matching card in the Certificates section.

Name each file so it contains the `slug` from `src/data/certificates.js`, e.g.:

```text
aws-cloud-foundations.pdf
linux-lfs101.pdf
cybersecurity-cisco.pdf
it-customer-support.pdf
iot-cisco.pdf
aws-cloud-practitioner-kodekloud.pdf
amazon-ecs-kodekloud.pdf
```

Files are discovered at build time by `src/utils/certificates.js`. No code
changes are needed after adding one — just rebuild.

If no file is present, the card simply shows "Certificate file not added".
No fake certificate images are generated. The AZ-900 entry is intentionally
marked **In preparation** and has no proof link.
