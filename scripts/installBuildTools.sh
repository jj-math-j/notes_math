__DENO_VERSION=v1.46.3
__DENO_ZIP_TARGET_FILENAME=deno-x86_64-unknown-linux-gnu.zip
__BUILD_TOOLS_BINARY_DIRECTORY_PATH=/usr/bin

sudo apt-get update
sudo curl --remote-name --location https://github.com/denoland/deno/releases/download/${__DENO_VERSION}/${__DENO_ZIP_TARGET_FILENAME} \
    && sudo unzip ./${__DENO_ZIP_TARGET_FILENAME} -d $__BUILD_TOOLS_BINARY_DIRECTORY_PATH \
    && sudo rm ./${__DENO_ZIP_TARGET_FILENAME}
