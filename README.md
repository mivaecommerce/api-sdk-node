# Miva Merchant API SDK for NodeJS

This node library wraps the Miva Merchant JSON API introduced in
Miva Merchant 9.12. It allows you to quickly integrate your node
applications with a Miva Merchant store to fetch, create, and update
store data.

For api documentation visit [https://docs.miva.com/json-api](https://docs.miva.com/json-api).

# Requirements

- Miva Merchant 10.00+
- NodeJS v10+
	- v11.6.0+ for SSH Private Key Authentication support
- NPM

**For Miva Merchant 9.x, use the 1.x release**

# Installation

To install the SDK simply add it to your project `package.json` in the `dependencies` section.

    "dependencies": {
        "merchantapi" : "2.1.0"
    }

Then run `npm install`

# Getting Started

For usage see the examples provided in the `examples/` directory.

#  SSH Private Key Authentication

## Compatible Private Key Formats

- PKCS#1 PEM
- PKCS#8 PEM

When specifying the key to use within the `SSHClient` or `SSHPrivateKeyAuthenticator`, specify the full path to your private key file.

## Converting from an OpenSSH Private Key to PKCS#1 PEM

If your private key is in OpenSSH format (starts with `-----BEGIN OPENSSH PRIVATE KEY-----`) then you will need to convert it.

Create a copy of your key preserving permissions:

    cp -p /path/to/private/key/id_rsa /path/to/private/key/id_rsa.pem

Convert in place to the proper format:

    ssh-keygen -p -m PEM -f /path/to/private/key/id_rsa.pem

## Create PKCS#8 PEM from PKCS#1 PEM private key format

Converting the key with encryption:

     openssl pkcs8 -in /path/to/private_key.pem -topk8 -out /path/to/private_key.pkcs8.pem

Converting the key without encryption:

     openssl pkcs8 -in /path/to/private_key.pem -topk8 -nocrypt -out /path/to/private_key.pkcs8.pem

# SSH Agent Authentication

## Compatible Public Key Formats

Your public key must be in the OpenSSH Public Key format. The default public key format is usually the correct type if you generated your key using `ssh-keygen`.

See https://tools.ietf.org/html/rfc4253#section-6.6 for format.

A quick way to get the correct format if you have the key associated with your local SSH agent is to run the command `ssh-add -L` and copying the corresponding key.

# License

This library is licensed under the `Miva SDK License Agreement`.

See the `LICENSE` file for more information.