#!/usr/bin/env bash

DOWNLOAD_FILE=$1
FORCE_DOWNLOAD=$2
DOWNLOAD_LINK='https://firebasestorage.googleapis.com/v0/b/swimmio.appspot.com/o/cli%2Flinux%2Fv028%2Fswimm_cli_by_hunk?alt=media&token=79e9a067-0b52-4500-ab58-01313371f879'

if [[ ! -f "$DOWNLOAD_FILE" || $FORCE_DOWNLOAD = true ]]; then
    # Download the CLI binary
    echo "Downloading Swimm CLI..."
    curl $DOWNLOAD_LINK >$DOWNLOAD_FILE
    echo "Downloaded Swimm CLI to file: $DOWNLOAD_FILE"

    # Make the downloaded file executable!
    chmod +x $DOWNLOAD_FILE
fi
  