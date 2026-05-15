#!/bin/bash

# key generation script
CERT_DIR="cert";

# directory creation
mkdir -p "$CERT_DIR"

# generate rsa key pair (using RSA 2048 bit)
openssl genpkey -algorithm RSA -out "$CERT_DIR/private-key.pem" -pkeyopt rsa_keygen_bits:2048

# extract public key
openssl rsa -in "$CERT_DIR/private-key.pem" -pubout -out "$CERT_DIR/public-key.pub"

# print success message
echo "Keys generated successfully"
echo "Private key: $CERT_DIR/private-key.pem"
echo "Public key: $CERT_DIR/public-key.pub"
